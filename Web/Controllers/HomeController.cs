using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Common.BookViewModels;
using Common.ReportsViewModels;
using Common.ReportsViewModels.Requests;
using DAL;
using Services;

namespace Web.Controllers
{
    public class HomeController : Controller
    {
        private readonly IReportsService _reportsService;

        public HomeController(IReportsService reportsService)
        {
            _reportsService = reportsService;
        }

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Books()
        {
            return View();
        }

        public ActionResult Borrow()
        {
            return View();
        }
        public async Task<ActionResult> Reports()
        {
            var vm = new InitialDataViewModel();
            vm.BookReports = await _reportsService.GetTopBooks(new GetTopBooks
            {
                Size = 5,
                Page = 0,
                Title = "",
                BookGenreId = -1,
                FromDate = DateTime.MinValue,
                ToDate = DateTime.MaxValue
            });
            vm.UserReports = await _reportsService.GetTopUsers(new GetTopUsers { Size = 5, Page = 0, FilterLastName = "" });
            return View(vm);
        }
    }
}