using Common;
using Services;
using System;
using System.Net;
using System.Threading.Tasks;
using System.Web.Mvc;
using Common.UserViewModels;

namespace wprawka.Controllers
{
    public class UsersController : Controller
    {
        private readonly IUsersService _usersService;

        public UsersController(IUsersService usersService)
        {
            _usersService = usersService;
        }
        public async Task<ActionResult> Index()
        {
            var users = await _usersService.GetUsersAsync();
            return View(users);
        }

        public async Task<ActionResult> Details(int? id)
        {
            try
            {
                var user = await _usersService.GetUserDetailsAsync(id);
                return View(user);
            }
            catch (ArgumentOutOfRangeException)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create(UserCreateUpdateViewModel user)
        {
            if (ModelState.IsValid)
            {
                await _usersService.AddAsync(user);
                return RedirectToAction("Index");
            }

            return View(user);
        }

        public async Task<ActionResult> Edit(int? id)
        {
            try
            {
                var user = await _usersService.GetUserForEditAsync(id);
                return View(user);
            }
            catch (ArgumentOutOfRangeException)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit(UserCreateUpdateViewModel user)
        {
            if (!ModelState.IsValid)
                return View(user);

            await _usersService.UpdateAsync(user);
            return RedirectToAction("Index");
        }

        public async Task<ActionResult> Delete(int? id)
        {
            try
            {
                var user = await _usersService.GetUserForDeleteAsync(id);
                return View(user);
            }
            catch (ArgumentOutOfRangeException)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(ConfirmDeleteUserViewModel viewModel)
        {
            try
            {
                if (!ModelState.IsValid)
                    return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

                await _usersService.RemoveAsync(viewModel.UserId);
                return RedirectToAction("Index");
            }
            catch (ArgumentOutOfRangeException)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
        }
    }
}
