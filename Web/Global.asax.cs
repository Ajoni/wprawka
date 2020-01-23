using System;
using Autofac;
using Autofac.Integration.Mvc;
using AutoMapper;
using Common.UserViewModels;
using DAL;
using DAL.Entities;
using Services;
using System.Linq;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Autofac.Integration.WebApi;
using Common.BookViewModels;
using Common.BorrowViewModels;
using Common.ReportsViewModels;

namespace Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(wprawka.WebApiConfig.Register);
            ConfigureContainer();
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        private void ConfigureContainer()
        {
            var builder = new ContainerBuilder();
            var executingAssembly = Assembly.GetExecutingAssembly();
            builder.RegisterControllers(typeof(MvcApplication).Assembly);
            builder.RegisterApiControllers(typeof(MvcApplication).Assembly);
            builder.RegisterModule(new ServicesModule());
            builder
                .RegisterType<DataContext>()
                .AsSelf()
                .InstancePerLifetimeScope();
            builder.RegisterInstance(GetMapper());


            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver((IContainer)container);
        }

        private IMapper GetMapper()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<User, UserCreateUpdateViewModel>().ReverseMap();
                cfg.CreateMap<User, UserIndexViewModel>()
                    .ForMember(vm => vm.BooksBorrowed,
                        o => o.MapFrom(u => u.BorrowedBooks.Count(b => !b.IsReturned)))
                    .ForMember(vm => vm.UserName,
                        o => o.MapFrom(u => u.FirstName + " " + u.LastName));
                cfg.CreateMap<User, UserDetailsViewModel>()
                    .ForMember(vm => vm.BorrowedBooksViewModel, o => o.Ignore())
                    .ForMember(vm => vm.BorrowedBooksHistoryViewModel, o => o.Ignore());
                cfg.CreateMap<User, UserDeleteViewModel>()
                    .ForMember(vm => vm.HasBooks,
                        o => o.MapFrom(u => u.BorrowedBooks.Count(b => !b.IsReturned) != 0));

                cfg.CreateMap<Book, BookViewModel>().ReverseMap()
                    .ForMember(b => b.BookGenre, o => o.Ignore())
                    ;
                cfg.CreateMap<DictBookGenre, DictBookGenreViewModel>().ReverseMap();

                cfg.CreateMap<Borrow, BorrowedBookViewModel>()
                    .ForMember(vm => vm.Author, o => o.MapFrom(b => b.Book.Author))
                    .ForMember(vm => vm.Title, o => o.MapFrom(b => b.Book.Title))
                    .ForMember(vm => vm.UserName, o => o.MapFrom(b => b.User.FirstName + " " + b.User.LastName))
                    .ForMember(vm => vm.Email, o => o.MapFrom(b => b.User.Email))
                    .ForMember(vm => vm.Phone, o => o.MapFrom(b => b.User.Phone));
                cfg.CreateMap<User, BorrowerViewModel>()
                    .ForMember(vm => vm.UserName, o => o.MapFrom(u => u.FirstName + " " + u.LastName))
                    .ForMember(vm => vm.Email, o => o.MapFrom(u => u.Email))
                    .ForMember(vm => vm.Phone, o => o.MapFrom(u => u.Phone))
                    .ForMember(vm => vm.AmountBorrowed, o => o.MapFrom(u => u.BorrowedBooks.Count(b => !b.IsReturned)));
                cfg.CreateMap<Borrow, BorrowViewModel>()
                    .ForMember(vm => vm.Author, o => o.MapFrom(u => u.Book.Author))
                    .ForMember(vm => vm.Title, o => o.MapFrom(u => u.Book.Title))
                    .ForMember(vm => vm.Genre, o => o.MapFrom(u => u.Book.BookGenre.Name));
                cfg.CreateMap<Book, AvailableBookViewModel>();
                cfg.CreateMap<User, BorrowUserViewModel>()
                    .ForMember(vm => vm.UserName, o => o.MapFrom(u => u.FirstName + " " + u.LastName));

                cfg.CreateMap<Book, BookReportViewModel>()
                    .ForMember(vm => vm.BorrowCount, o => o.Ignore())
                    .ForMember(vm => vm.BookGenre, o => o.MapFrom(x => x.BookGenre.Name))
                    .ForMember(vm => vm.BookGenreId, o => o.MapFrom(x => x.BookGenre.BookGenreId));
                cfg.CreateMap<Tuple<int, Book>, BookReportViewModel>()
                    .IncludeMembers(x => x.Item2)
                    .ForMember(vm => vm.BorrowCount, o => o.MapFrom(x => x.Item1))
                    .ForMember(vm => vm.BookGenre, o => o.MapFrom(x => x.Item2.BookGenre.Name))
                    .ForMember(vm => vm.BookGenreId, o => o.MapFrom(x => x.Item2.BookGenre.BookGenreId));
                cfg.CreateMap<User, UserReportViewModel>()
                    .ForMember(vm => vm.BorrowCount, o => o.Ignore());
                cfg.CreateMap<Tuple<int, User>, UserReportViewModel>()
                    .IncludeMembers(x => x.Item2)
                    .ForMember(vm => vm.BorrowCount, o => o.MapFrom(x => x.Item1));
            });

            config.AssertConfigurationIsValid();

            return config.CreateMapper();
        }
    }
}
