using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Common.UserViewModels.BorrowedBooks;

namespace Common.UserViewModels
{
    public class UserDetailsViewModel
    {
        public int UserId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Phone]
        public string Phone { get; set; }
        public List<BorrowedBooksViewModel> BorrowedBooksViewModel { get; set; }
        public List<BorrowedBooksHistoryViewModel> BorrowedBooksHistoryViewModel{ get; set; }

        public UserDetailsViewModel() { }
    }
}
