using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.BookViewModels.BorrowedBooks;

namespace Common.BookViewModels
{
    public class BookDetailsViewModel
    {
        public BookViewModel Book { get; set; }
        public List<BorrowedBooksViewModel> BorrowedBooks { get; set; }
        public List<BorrowedBooksHistoryViewModel> BorrowedBooksHistory { get; set; }
    }
}
