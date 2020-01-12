using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class Book
    {
        [Key]
        public int BookId { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public string Title { get; set; }
        public DateTime? ReleaseDate { get; set; }
        [Required]
        public string ISBN { get; set; }
        public int Count { get; set; }
        public DateTime AddDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int BookGenreId { get; set; }
        public virtual DictBookGenre BookGenre { get; set; }
    }
}
