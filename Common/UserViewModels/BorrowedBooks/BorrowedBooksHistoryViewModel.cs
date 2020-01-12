using System;

namespace Common.UserViewModels.BorrowedBooks
{
    public class BorrowedBooksHistoryViewModel
    {
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string ISBN { get; set; }
        public string Genre { get; set; }
    }
}
