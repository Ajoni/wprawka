using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.BorrowViewModels
{
    public class BorrowBooksResponeViewModel
    {
        public List<BorrowedBookViewModel> BorrowedBooks { get; set; }
        public BorrowerViewModel Borrower { get; set; }
    }
}
