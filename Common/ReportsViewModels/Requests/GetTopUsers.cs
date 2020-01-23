using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.ReportsViewModels.Requests
{
    public class GetTopUsers
    {
        [Required]
        [Range(0,int.MaxValue)]
        public int Page { get; set; }
        [Required]
        [Range(1, int.MaxValue)]
        public int Size { get; set; }
        [Required(AllowEmptyStrings = true)]
        public string FilterLastName { get; set; }
    }
}
