using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class DataContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Book> Book { get; set; }
        public DbSet<DictBookGenre> DictBookGenre { get; set; }
        public DbSet<Borrow> Borrow { get; set; }

        public DataContext() : base("Default")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Entity<DictBookGenre>().HasKey(genre => genre.BookGenreId);
        }
    }
}
