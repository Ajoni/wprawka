using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.BorrowViewModels
{
    public class BorrowViewModel
    {
        public int BookId { get; set; }
        public int UserId { get; set; }
        public int BorrowId { get; set; }
        public string Author { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}")]
        public DateTime FromDate { get; set; }
    }
}
