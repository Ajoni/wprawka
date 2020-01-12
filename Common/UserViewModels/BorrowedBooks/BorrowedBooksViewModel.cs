using System;

namespace Common.UserViewModels.BorrowedBooks
{
    public class BorrowedBooksViewModel
    {
        public string Author { get; set; }
        public string Title { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string ISBN { get; set; }
        public string Genre { get; set; }
    }
}
