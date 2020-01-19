using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Common.BorrowViewModels;
using DAL;
using DAL.Entities;

namespace Services
{
    public interface IBorrowService
    {
        Task<List<BorrowedBookViewModel>> GetBorrowedBooks();
        Task<List<AvailableBookViewModel>> GetAvailableBooks(int? userId);
        Task<List<BorrowerViewModel>> GetBorrowers();
        Task<List<BorrowUserViewModel>> GetUsers();
        Task<BorrowerDetailsViewModel> GetBorrowerDetails(int? userId);
        Task BorrowBook(BorrowBookViewModel viewModel);
        Task ReturnBook(List<ReturnBookViewModel> viewModel);
    }
    public class BorrowService : IBorrowService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public BorrowService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<BorrowedBookViewModel>> GetBorrowedBooks()
        {
            var borrowedBooks = await _context.Borrow.AsNoTracking().Where(b => !b.IsReturned)
                .ProjectToListAsync<BorrowedBookViewModel>(_mapper.ConfigurationProvider);
            return borrowedBooks;
        }

        public async Task<List<AvailableBookViewModel>> GetAvailableBooks(int? userId)
        {
            var user = await _context.User.FindAsync(userId);
            if (user == null)
                throw new ArgumentOutOfRangeException(nameof(userId), $"No user with id:{userId}");

            var currentlyBorrowedIds = await _context.Borrow.Where(b => b.UserId == userId && !b.IsReturned)
                                                            .Select(b => b.BookId).ToListAsync();
            var availableBooks = await _context.Book.Where(b => b.Count > 0 && !currentlyBorrowedIds.Contains(b.BookId))
                .ProjectToListAsync<AvailableBookViewModel>(_mapper.ConfigurationProvider);
            return availableBooks;
        }

        public async Task<List<BorrowerViewModel>> GetBorrowers()
        {
            var borrowers = await _context.Borrow.AsNoTracking().Where(b => !b.IsReturned).Select(b => b.UserId).Distinct()
                .Join(_context.User, id => id, u => u.UserId, (borrow, user) => user)
                .ProjectToListAsync<BorrowerViewModel>(_mapper.ConfigurationProvider);
            return borrowers;
        }

        public async Task<List<BorrowUserViewModel>> GetUsers()
        {
            var users = await _context.User.AsNoTracking()
                .ProjectToListAsync<BorrowUserViewModel>(_mapper.ConfigurationProvider);
            return users;
        }

        public async Task<BorrowerDetailsViewModel> GetBorrowerDetails(int? userId)
        {
            var user = await _context.User.FindAsync(userId);
            if (user == null)
                throw new ArgumentOutOfRangeException(nameof(userId), $"No user with id:{userId}");

            var vm = new BorrowerDetailsViewModel();
            vm.Borrows = await _context.Borrow.Where(b => !b.IsReturned && b.UserId == userId)
                .ProjectToListAsync<BorrowViewModel>(_mapper.ConfigurationProvider);

            return vm;
        }

        public async Task BorrowBook(BorrowBookViewModel viewModel)
        {
            var booksToBorrow = await _context.Book
                .Join(viewModel.BookIds, b => b.BookId, vm => vm, (book, i) => book)
                .ToListAsync();

            if (booksToBorrow.Count < viewModel.BookIds.Count)
                throw new ArgumentOutOfRangeException
                    (nameof(viewModel.BookIds), $"Some book ids are not correct. Found ids:{viewModel.BookIds.Select(b => b + ", ")}");
            var booksWithNoCopies = booksToBorrow.Where(b => b.Count <= 0).ToList();
            if (booksWithNoCopies.Count > 0)
                throw new InvalidOperationException
                    ($"No copies of books with ids:{booksWithNoCopies.Select(b => b.BookId + ", ")}");
            var borrowed = await _context.Borrow.AsNoTracking().Where(b => !b.IsReturned && b.UserId == viewModel.UserId)
                .Join(viewModel.BookIds, b => b.BookId, vm => vm, (borrow, i) => borrow).ToListAsync();
            if (borrowed.Count > 0)
                throw new InvalidOperationException(
                    $"User with id:{viewModel.UserId} has already borrowed books with ids:{borrowed.Select(b => b + ", ")}");

            var borrowList = booksToBorrow.Select(b =>
            {
                b.Count--;
                b.ModifiedDate = DateTime.Now; //w sumie to nie wiem czy tego typu 'modyfikacje' uznawac ale załóżmy że tak
                return new Borrow
                {
                    BookId = b.BookId,
                    UserId = viewModel.UserId,
                    FromDate = DateTime.Now,
                    ToDate = DateTime.Now.AddMonths(1),
                    IsReturned = false
                };
            }).ToList();

            _context.Borrow.AddRange(borrowList);
            await _context.SaveChangesAsync();
        }

        public async Task ReturnBook(List<ReturnBookViewModel> viewModel)
        {
            //niepodoba mi sie to bardzo, myślałem zrobić stored proc i wysłać vm jak userdef typ ale zrezygnowałem żeby db nie modyfikować na tym etapie już
            //jeżeli jest jakiś lepszy sposób to bardzo bym chciał go poznać
            var borrows = await _context.Borrow.Where(b => !b.IsReturned)
                                 .Join(viewModel.Select(model => model.BorrowId), borrow => borrow.BorrowId, model => model, (borrow, model) => borrow)
                                 .Join(viewModel.Select(model => model.BookId).Distinct(), borrow => borrow.BookId, model => model, (borrow, model) => borrow)
                                 .Join(viewModel.Select(model => model.UserId).Distinct(), borrow => borrow.UserId, model => model, (borrow, model) => borrow)
                                 .ToListAsync();

            if (borrows.Count != viewModel.Count)
            {
                var borrowIds = borrows.Select(b => b.BorrowId).ToList();
                throw new InvalidOperationException(
                    $"Couldn't find borrows:{string.Concat(viewModel.Where(vm => !borrowIds.Contains(vm.BorrowId)).Select(v => v.BorrowId + ", "))}");
            }

            foreach (var borrow in borrows)
            {
                borrow.ToDate = DateTime.Now;
                borrow.IsReturned = true;
                borrow.Book.Count++;
                borrow.Book.ModifiedDate = DateTime.Now;
            }

            await _context.SaveChangesAsync();
        }
    }
}
