using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.UserViewModels
{
    public class ConfirmDeleteUserViewModel
    {
        public int UserId { get; set; }
        [Required]
        [Range(typeof(bool), "false", "false")]
        public bool HasBooks { get; set; }
    }
}
