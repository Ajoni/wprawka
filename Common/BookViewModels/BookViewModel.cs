using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Entities;

namespace Common.BookViewModels
{
    public class BookViewModel
    {
        [Required]
        public int BookId { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Title { get; set; }
        public DateTime? ReleaseDate { get; set; }
        [Required]
        public string ISBN { get; set; }
        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Please enter a non negative integer Number")]
        public int Count { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        [Required]
        [Range(0, int.MaxValue, ErrorMessage = "Please enter a non negative integer Number")]
        public int BookGenreId { get; set; }
        public DictBookGenre BookGenre { get; set; }
    }
}
