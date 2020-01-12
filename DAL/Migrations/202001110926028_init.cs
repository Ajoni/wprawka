namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Book",
                c => new
                    {
                        BookId = c.Int(nullable: false, identity: true),
                        Author = c.String(nullable: false),
                        Title = c.String(nullable: false),
                        ReleaseDate = c.DateTime(),
                        ISBN = c.String(nullable: false),
                        Count = c.Int(nullable: false),
                        AddDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        BookGenreId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.BookId)
                .ForeignKey("dbo.DictBookGenre", t => t.BookGenreId, cascadeDelete: true)
                .Index(t => t.BookGenreId);
            
            CreateTable(
                "dbo.DictBookGenre",
                c => new
                    {
                        BookGenreId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.BookGenreId);
            
            CreateTable(
                "dbo.Borrow",
                c => new
                    {
                        BorrowId = c.Int(nullable: false, identity: true),
                        FromDate = c.DateTime(nullable: false),
                        ToDate = c.DateTime(nullable: false),
                        IsReturned = c.Boolean(nullable: false, defaultValue: false),
                    BookId = c.Int(nullable: false),
                        UserId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.BorrowId)
                .ForeignKey("dbo.Book", t => t.BookId, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.UserId, cascadeDelete: true)
                .Index(t => t.BookId)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.User",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        FirstName = c.String(nullable: false),
                        LastName = c.String(nullable: false),
                        BirthDate = c.DateTime(nullable: false),
                        Email = c.String(nullable: false),
                        Phone = c.String(),
                        AddDate = c.DateTime(nullable: false),
                        ModifiedDate = c.DateTime(),
                        IsActive = c.Boolean(nullable: false, defaultValue:false),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Borrow", "UserId", "dbo.User");
            DropForeignKey("dbo.Borrow", "BookId", "dbo.Book");
            DropForeignKey("dbo.Book", "BookGenreId", "dbo.DictBookGenre");
            DropIndex("dbo.Borrow", new[] { "UserId" });
            DropIndex("dbo.Borrow", new[] { "BookId" });
            DropIndex("dbo.Book", new[] { "BookGenreId" });
            DropTable("dbo.User");
            DropTable("dbo.Borrow");
            DropTable("dbo.DictBookGenre");
            DropTable("dbo.Book");
        }
    }
}
