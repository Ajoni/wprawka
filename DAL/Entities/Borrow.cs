using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class Borrow
    {
        [Key]
        public int BorrowId { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public bool IsReturned { get; set; }
        public int BookId { get; set; }
        public virtual Book Book { get; set; }
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
