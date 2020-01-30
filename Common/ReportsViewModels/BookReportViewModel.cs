using System;


namespace Common.ReportsViewModels
{
    public class BookReportViewModel
    {
        public int BookId { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string ISBN { get; set; }
        public int BookGenreId { get; set; }
        public string BookGenre { get; set; }
        public int BorrowCount { get; set; }
    }
}
