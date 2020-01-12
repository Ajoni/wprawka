using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.BookViewModels
{
    public class DictBookGenreViewModel
    {
        [Required]
        public int BookGenreId { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
