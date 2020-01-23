using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Common.ReportsViewModels;
using Common.ReportsViewModels.Requests;
using Services;

namespace wprawka.Controllers
{
    public class ReportsController : ApiController
    {
        private readonly IReportsService _reportsService;

        public ReportsController(IReportsService reportsService)
        {
            _reportsService = reportsService;
        }

        [HttpPost]
        [Route("reports/topBooks")]
        public async Task<IHttpActionResult> GetTopBooks(GetTopBooks getTopBooks)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                var books = await _reportsService.GetTopBooks(getTopBooks);
                return Ok(books);
            }
            catch (ArgumentOutOfRangeException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Route("reports/topUsers")]
        public async Task<IHttpActionResult> GetTopUsers(GetTopUsers getTopUsers)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            try
            {
                var users = await _reportsService.GetTopUsers(getTopUsers);
                return Ok(users);
            }
            catch (ArgumentOutOfRangeException e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
