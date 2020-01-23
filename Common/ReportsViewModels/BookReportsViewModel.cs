using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.ReportsViewModels
{
    public class BookReportsViewModel
    {
        public List<BookReportViewModel> Data { get; set; }
        public int Page { get; set; }
        public int TotalCount { get; set; }
    }
}
