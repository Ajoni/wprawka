using System;
using System.ComponentModel.DataAnnotations;
using DAL;


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
        public string Genre { get; set; }
    }
}
