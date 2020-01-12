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
                        o => o.MapFrom(u => u.BorrowedBooks.Count(b => !b.IsReturned) != 0))
                    .ForMember(vm => vm.UserName,
                        o => o.MapFrom(u => $"{u.FirstName} {u.LastName}"));
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
            });

            return config.CreateMapper();
        }
    }
}
