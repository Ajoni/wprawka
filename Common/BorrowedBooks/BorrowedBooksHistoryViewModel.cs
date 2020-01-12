using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.BorrowedBooks
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
