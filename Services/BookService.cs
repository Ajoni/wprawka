using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Common.BookViewModels;
using Common.BookViewModels.BorrowedBooks;
using DAL;

namespace Services
{
    public interface IBookService
    {
        Task<BookViewModel> AddAsync(BookViewModel viewModel);
        Task<BookViewModel> UpdateAsync(BookViewModel viewModel);
        Task<List<DictBookGenreViewModel>> GetBookGenresAsync();
        Task<List<BookViewModel>> GetBooksAsync();
        Task<BookDetailsViewModel> GetBookDetailsAsync(int? bookId);
    }
    public class BookService : IBookService
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public BookService(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<BookViewModel> AddAsync(BookViewModel viewModel)
        {
            viewModel.AddDate = DateTime.Now;
            var book = _mapper.Map<Book>(viewModel);

            _context.Book.Add(book);
            await _context.SaveChangesAsync();

            book.DictBookGenre = await _context.DictBookGenre.AsNoTracking()
                .SingleOrDefaultAsync(g => g.BookGenreId == book.BookGenreId);
            return _mapper.Map(book, viewModel);
        }

        public async Task<BookViewModel> UpdateAsync(BookViewModel viewModel)
        {
            var book = await _context.Book.FindAsync(viewModel.BookId);

            if (book == null)
                throw new ArgumentOutOfRangeException($"No book with id: {viewModel.BookId}");

            viewModel.ModifiedDate = DateTime.Now;
            _mapper.Map(viewModel, book);

            await _context.SaveChangesAsync();

            return viewModel;
        }

        public async Task<List<DictBookGenreViewModel>> GetBookGenresAsync()
        {
            var genres = await _context.DictBookGenre.AsNoTracking().ToListAsync();
            return _mapper.Map<List<DictBookGenreViewModel>>(genres);
        }

        public async Task<List<BookViewModel>> GetBooksAsync()
        {
            var books = await _context.Book.Include(x=>x.DictBookGenre).AsNoTracking().ToListAsync();
            return _mapper.Map<List<BookViewModel>>(books);
        }

        public async Task<BookDetailsViewModel> GetBookDetailsAsync(int? bookId)
        {
            var book = await _context.Book.FindAsync(bookId);

            if (book == null)
                throw new ArgumentOutOfRangeException($"No book with id: {bookId}");

            var result = new BookDetailsViewModel();

            result.Book = _mapper.Map(book, new BookViewModel());
            result.BorrowedBooks = await GetBorrowedBooks(bookId);
            result.BorrowedBooksHistory = await GetBorrowedHistoryBooks(bookId);

            return result;
        }

        private async Task<List<BorrowedBooksViewModel>> GetBorrowedBooks(int? bookId)
        {
            if (!_context.Book.Any(u => u.BookId == bookId))
                throw new ArgumentOutOfRangeException($"No book with id: {bookId}");

            var books = await _context.Borrow.AsNoTracking().Where(b => b.BookId == bookId && !b.IsReturned)
                .Select(b => new BorrowedBooksViewModel
                {
                    FromDate = b.FromDate,
                    UserName = b.User.FirstName + " " + b.User.LastName,
                    Phone = b.User.Phone,
                    BirthDate = b.User.BirthDate,
                    Email = b.User.Email
                }).ToListAsync();

            return books;
        }

        private async Task<List<BorrowedBooksHistoryViewModel>> GetBorrowedHistoryBooks(int? bookId)
        {
            if (!_context.Book.Any(u => u.BookId == bookId))
                throw new ArgumentOutOfRangeException($"No book with id: {bookId}");

            var books = await _context.Borrow.AsNoTracking().Where(b => b.BookId == bookId && b.IsReturned)
                .Select(b => new BorrowedBooksHistoryViewModel
                {
                    FromDate = b.FromDate,
                    ToDate = b.ToDate,
                    UserName = b.User.FirstName + " " + b.User.LastName,
                    Phone = b.User.Phone,
                    BirthDate = b.User.BirthDate,
                    Email = b.User.Email
                }).ToListAsync();

            return books;
        }
    }
}

