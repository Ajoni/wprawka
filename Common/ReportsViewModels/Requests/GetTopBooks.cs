using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.BookViewModels;

namespace Common.ReportsViewModels.Requests
{
    public class GetTopBooks
    {
        [Required]
        [Range(0, int.MaxValue)]
        public int Page { get; set; }
        [Required]
        [Range(1, int.MaxValue)]
        public int Size { get; set; }
        [Required(AllowEmptyStrings = true)]
        public string Title { get; set; }
        [Required]
        public int BookGenreId { get; set; }
        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime FromDate { get; set; }
        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime ToDate { get; set; }
    }
}
