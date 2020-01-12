using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Common;
using Common.UserViewModels;
using Common.UserViewModels.BorrowedBooks;
using DAL;
using DAL.Entities;

namespace Services
{
    public interface IUsersService
    {
        Task AddAsync(UserCreateUpdateViewModel viewModel);
        Task UpdateAsync(UserCreateUpdateViewModel viewModel);
        Task RemoveAsync(int? userId);
        Task<UserDetailsViewModel> GetUserDetailsAsync(int? userId);
        Task<UserCreateUpdateViewModel> GetUserForEditAsync(int? userId);
        Task<UserDeleteViewModel> GetUserForDeleteAsync(int? userId);
        Task<List<UserIndexViewModel>> GetUsersAsync();
        Task<List<BorrowedBooksViewModel>> GetBorrowedBooks(int? userId);
        Task<List<BorrowedBooksHistoryViewModel>> GetBorrowedHistoryBooks(int? userId);
    }

    public class UserService : IUsersService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UserService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task AddAsync(UserCreateUpdateViewModel viewModel)
        {
            viewModel.AddDate = DateTime.Now;
            var user = _mapper.Map<User>(viewModel);

            _context.User.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(UserCreateUpdateViewModel viewModel)
        {
            var user = await _context.User.FindAsync(viewModel.UserId);

            if (user == null)
                throw new ArgumentOutOfRangeException($"No user with id: {viewModel.UserId}");

            viewModel.ModifiedDate = DateTime.Now;
            _mapper.Map<UserCreateUpdateViewModel, User>(viewModel, user);

            await _context.SaveChangesAsync();
        }

        public async Task RemoveAsync(int? userId)
        {
            var user = await _context.User.FindAsync(userId);

            if (user == null)
                throw new ArgumentOutOfRangeException($"No user with id: {userId}");

            user.IsActive = false;
            await _context.SaveChangesAsync();
        }

        public async Task<UserDetailsViewModel> GetUserDetailsAsync(int? userId)
        {
            var user = await _context.User.FindAsync(userId);

            if (user == null)
                throw new ArgumentOutOfRangeException($"No user with id: {userId}");

            var viewModel = _mapper.Map<UserDetailsViewModel>(user);
            viewModel.BorrowedBooksViewModel = await GetBorrowedBooks(userId);
            viewModel.BorrowedBooksHistoryViewModel = await GetBorrowedHistoryBooks(userId);
            return viewModel;
        }

        public async Task<UserCreateUpdateViewModel> GetUserForEditAsync(int? userId)
        {
            var viewModel = await _context.User.Where(x => x.UserId == userId).ProjectTo<UserCreateUpdateViewModel>(_mapper.ConfigurationProvider).FirstOrDefaultAsync();

            if (viewModel == null)
                throw new ArgumentOutOfRangeException($"No user with id: {userId}");

            return viewModel;
        }


        public async Task<UserDeleteViewModel> GetUserForDeleteAsync(int? userId)
        {
            var viewModel = await _context.User.Where(x=> x.UserId == userId).ProjectTo<UserDeleteViewModel>(_mapper.ConfigurationProvider).FirstOrDefaultAsync();

            if (viewModel == null)
                throw new ArgumentOutOfRangeException($"No user with id: {userId}");

            return viewModel;
        }

        public async Task<List<UserIndexViewModel>> GetUsersAsync()
        {
            var users = await _context.User.AsNoTracking().Where(u => u.IsActive).ToListAsync();
            return _mapper.Map<List<UserIndexViewModel>>(users);
        }
        
        public async Task<List<BorrowedBooksViewModel>> GetBorrowedBooks(int? userId)
        {
            if (!_context.User.Any(u => u.UserId == userId))
                throw new ArgumentOutOfRangeException($"No user with id: {userId}");

            var books = await _context.Borrow.AsNoTracking().Where(b => b.UserId == userId && !b.IsReturned)
                .Select(b => new BorrowedBooksViewModel
                {
                    Title = b.Book.Title,
                    Author = b.Book.Author,
                    Genre = b.Book.BookGenre.Name,
                    ISBN = b.Book.ISBN,
                    ReleaseDate = b.Book.ReleaseDate,
                }).ToListAsync();

            return books;
        }

        public async Task<List<BorrowedBooksHistoryViewModel>> GetBorrowedHistoryBooks(int? userId)
        {;
            if (!_context.User.Any(u => u.UserId == userId))
                throw new ArgumentOutOfRangeException($"No user with id: {userId}");

            var books = await _context.Borrow.AsNoTracking().Where(b => b.UserId == userId && b.IsReturned)
                .Select(b => new BorrowedBooksHistoryViewModel
                {
                    FromDate = b.FromDate,
                    ToDate = b.ToDate,
                    Title = b.Book.Title,
                    Author = b.Book.Author,
                    Genre = b.Book.BookGenre.Name,
                    ISBN = b.Book.ISBN,
                    ReleaseDate = b.Book.ReleaseDate,
                }).ToListAsync();

            return books;
        }
    }
}
