using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Common.BookViewModels;
using Common.BorrowViewModels;
using Services;

namespace wprawka.Controllers
{
    public class BorrowController : ApiController
    {
        private readonly IBorrowService _borrowService;

        public BorrowController(IBorrowService borrowService)
        {
            _borrowService = borrowService;
        }

        [Route("borrow/borrowed")]
        public async Task<List<BorrowedBookViewModel>> GetBorrowedBooks()
        {
            var books = await _borrowService.GetBorrowedBooks();
            return books;
        }

        [Route("borrow/borrowers")]
        public async Task<List<BorrowerViewModel>> GetBorrowers()
        {
            var books = await _borrowService.GetBorrowers();
            return books;
        }
        
        [Route("borrow/borrower/{id}")]
        public async Task<IHttpActionResult> GetBorrowerDetails(int? id)
        {
            try
            {
                var borrowerDetails = await _borrowService.GetBorrowerDetails(id);
                return Ok(borrowerDetails);
            }
            catch (ArgumentOutOfRangeException e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("borrow/users")]
        public async Task<List<BorrowUserViewModel>> GetUsers()
        {
            var users = await _borrowService.GetUsers();
            return users;
        }

        [Route("borrow/available/{id}")]
        public async Task<IHttpActionResult> GetAvailableBooks(int? id)
        {
            try
            {
                var availableBooks = await _borrowService.GetAvailableBooks(id);
                return Ok(availableBooks);
            }
            catch (ArgumentOutOfRangeException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Route("borrow/")]
        public async Task<IHttpActionResult> Borrow(BorrowBooksViewModel viewModel)
        {
            try
            {
                var respone = await _borrowService.BorrowBook(viewModel);
                return Ok(respone);
            }
            catch (ArgumentOutOfRangeException e)
            {
                return BadRequest(e.Message);
            }
            catch (InvalidOperationException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Route("borrow/return")]
        public async Task<IHttpActionResult> Return(List<ReturnBookViewModel> viewModel)
        {
            try
            {
                await _borrowService.ReturnBook(viewModel);
                return Ok();
            }
            catch (ArgumentOutOfRangeException e)
            {
                return BadRequest(e.Message);
            }
            catch (InvalidOperationException e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
