using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using Common.BookViewModels;
using DAL;
using DAL.Entities;
using Microsoft.Ajax.Utilities;
using Services;

namespace wprawka.Controllers
{
    public class BooksController : ApiController
    {
        private readonly IBookService _bookService;

        public BooksController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [Route("book/all")]
        public async Task<List<BookViewModel>> GetBooks()
        {
            var books = await _bookService.GetBooksAsync();
            return books;
        }

        [Route("book/genres")]
        public async Task<List<DictBookGenreViewModel>> GetBookGenres()
        {
            var books = await _bookService.GetBookGenresAsync();
            return books;
        }

        [Route("book/add")]
        public async Task<IHttpActionResult> Add(BookViewModel viewModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var resp = await _bookService.AddAsync((viewModel));

            return Ok(resp);
        }

        [Route("book/update")]
        public async Task<IHttpActionResult> UpdateBook(BookViewModel viewModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var resp = await _bookService.UpdateAsync(viewModel);
                return Ok(resp);
            }
            catch (ArgumentOutOfRangeException e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("book/{id}")]
        public async Task<IHttpActionResult> GetBook(int id)
        {
            try
            {
                var book = await _bookService.GetBookDetailsAsync(id);
                return Ok(book);
            }
            catch (ArgumentOutOfRangeException e)
            {
                return BadRequest(e.Message);
            }

        }

    }
}