using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class DictBookGenre
    {
        [Key]
        public int BookGenreId { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
