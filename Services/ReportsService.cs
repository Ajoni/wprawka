using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Common.ReportsViewModels;
using Common.ReportsViewModels.Requests;
using DAL;
using DAL.Entities;

namespace Services
{
    public interface IReportsService
    {
        Task<BookReportsViewModel> GetTopBooks(GetTopBooks getTopBooks);
        Task<UserReportsViewModel> GetTopUsers(GetTopUsers getTopUsers);
    }
    public class ReportsService : IReportsService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public ReportsService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<BookReportsViewModel> GetTopBooks(GetTopBooks getTopBooks)
        {
            var bookIds = await _context.Book.AsNoTracking()
                .Where(b => (getTopBooks.Title == null || b.Title.Contains(getTopBooks.Title))
                && (getTopBooks.BookGenreId <= 0 || b.BookGenreId == getTopBooks.BookGenreId))
                .Select(b => b.BookId)
                .ToListAsync();

            var books = bookIds
                .GroupJoin(_context.Borrow.AsNoTracking()
                        .Where(b => b.FromDate >= getTopBooks.FromDate && b.FromDate <= getTopBooks.ToDate),
                         id => id, borrow => borrow.BookId, (id, borrows) =>
                      new { BookId = id, BorrowCount = borrows.Count() })
                .OrderByDescending(x => x.BorrowCount).Skip(getTopBooks.Page * getTopBooks.Size).Take(getTopBooks.Size)
                .Join(_context.Book, x => x.BookId, b => b.BookId, (x, book) => new { x.BorrowCount, Book = book })
                .ToList();

            var vm = new BookReportsViewModel();
            vm.Data = _mapper.Map(books.Select(x => new Tuple<int, Book>(x.BorrowCount, x.Book)),
                new List<BookReportViewModel>());
            vm.Page = getTopBooks.Page;
            vm.TotalCount = bookIds.Count;

            return vm;
        }

        public async Task<UserReportsViewModel> GetTopUsers(GetTopUsers getTopUsers)
        {
            var userIds = await _context.User.AsNoTracking()
                .Where(u => u.LastName.StartsWith(getTopUsers.FilterLastName)).Select(u => u.UserId)
                .ToListAsync();

            var users = userIds
            .GroupJoin(_context.Borrow.AsNoTracking(), id => id, b => b.UserId, (id, borrows) =>
                     new { UserId = id, BorrowCount = borrows.Count() })
            .OrderByDescending(x => x.BorrowCount).Skip(getTopUsers.Page * getTopUsers.Size).Take(getTopUsers.Size)
            .Join(_context.User, x => x.UserId, b => b.UserId, (x, user) => new { x.BorrowCount, User = user })
            .ToList();

            var vm = new UserReportsViewModel();
            vm.Data = _mapper.Map(users.Select(x => new Tuple<int, User>(x.BorrowCount, x.User)),
                new List<UserReportViewModel>());
            vm.Page = getTopUsers.Page;
            vm.TotalCount = userIds.Count;

            return vm;
        }
    }
}
