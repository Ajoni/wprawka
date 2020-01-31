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
            var bookIds = _context.Book.AsNoTracking()
                .Where(b => (getTopBooks.Title == null || b.Title.Contains(getTopBooks.Title))
                && (getTopBooks.BookGenreId <= 0 || b.BookGenreId == getTopBooks.BookGenreId))
                .Select(b => b.BookId);

            var borrowsInTimeframe = _context.Borrow.AsNoTracking().Where(b =>
                b.FromDate >= getTopBooks.FromDate && b.FromDate <= getTopBooks.ToDate);
            var books = await
                (from page in
                        (from bookId in bookIds
                         join borrows in borrowsInTimeframe
                             on bookId equals borrows.BookId into borrowsGroup
                         select new { BookId = bookId, BorrowCount = borrowsGroup.Count(), TotalCount = bookIds.Count() })
                        .OrderByDescending(x => x.BorrowCount).Skip(getTopBooks.Page * getTopBooks.Size)
                        .Take(getTopBooks.Size)
                 join book in _context.Book on page.BookId equals book.BookId
                 select new { page.BorrowCount, page.TotalCount, Book = book })
                .ToListAsync();

            var vm = new BookReportsViewModel();
            vm.Data = _mapper.Map(books.Select(x => new Tuple<int, Book>(x.BorrowCount, x.Book)),
                new List<BookReportViewModel>());
            vm.Page = getTopBooks.Page;
            vm.TotalCount = books.FirstOrDefault()?.TotalCount ?? 0;

            return vm;
        }

        public async Task<UserReportsViewModel> GetTopUsers(GetTopUsers getTopUsers)
        {
            var userIds = _context.User.AsNoTracking()
                .Where(u => u.LastName.StartsWith(getTopUsers.FilterLastName)).Select(u => u.UserId);

            var users = await
                    (from page in (from userId in userIds
                                   join borrows in _context.Borrow.AsNoTracking() on userId equals borrows.UserId into borrowsGroup
                                   select new { UserId = userId, BorrowCount = borrowsGroup.Count(), TotalCount = userIds.Count() })
                    .OrderByDescending(x => x.BorrowCount).Skip(getTopUsers.Page * getTopUsers.Size).Take(getTopUsers.Size)
                     join user in _context.User.AsNoTracking() on page.UserId equals user.UserId
                     select new { page.BorrowCount, User = user, TotalCount=page.TotalCount })
                    .ToListAsync();

            var vm = new UserReportsViewModel();
            vm.Data = _mapper.Map(users.Select(x => new Tuple<int, User>(x.BorrowCount, x.User)),
                new List<UserReportViewModel>());
            vm.Page = getTopUsers.Page;
            vm.TotalCount = users.FirstOrDefault()?.TotalCount ?? 0;

            return vm;
        }
    }
}
