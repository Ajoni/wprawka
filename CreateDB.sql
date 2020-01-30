USE [master]
GO
/****** Object:  Database [spyrosoft]    Script Date: 1/30/2020 1:31:27 PM ******/
DROP DATABASE IF EXISTS [spyrosoft]
GO
CREATE DATABASE [spyrosoft]
GO
ALTER DATABASE [spyrosoft] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [spyrosoft].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [spyrosoft] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [spyrosoft] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [spyrosoft] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [spyrosoft] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [spyrosoft] SET ARITHABORT OFF 
GO
ALTER DATABASE [spyrosoft] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [spyrosoft] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [spyrosoft] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [spyrosoft] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [spyrosoft] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [spyrosoft] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [spyrosoft] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [spyrosoft] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [spyrosoft] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [spyrosoft] SET  ENABLE_BROKER 
GO
ALTER DATABASE [spyrosoft] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [spyrosoft] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [spyrosoft] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [spyrosoft] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [spyrosoft] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [spyrosoft] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [spyrosoft] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [spyrosoft] SET RECOVERY FULL 
GO
ALTER DATABASE [spyrosoft] SET  MULTI_USER 
GO
ALTER DATABASE [spyrosoft] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [spyrosoft] SET DB_CHAINING OFF 
GO
ALTER DATABASE [spyrosoft] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [spyrosoft] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [spyrosoft] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'spyrosoft', N'ON'
GO
ALTER DATABASE [spyrosoft] SET QUERY_STORE = OFF
GO
USE [spyrosoft]
GO
/****** Object:  Table [dbo].[Book]    Script Date: 1/30/2020 1:31:27 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Book](
	[BookId] [int] IDENTITY(1,1) NOT NULL,
	[Author] [nvarchar](max) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[ReleaseDate] [datetime] NULL,
	[ISBN] [nvarchar](max) NOT NULL,
	[Count] [int] NOT NULL,
	[AddDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NULL,
	[BookGenreId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.Book] PRIMARY KEY CLUSTERED 
(
	[BookId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Borrow]    Script Date: 1/30/2020 1:31:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Borrow](
	[BorrowId] [int] IDENTITY(1,1) NOT NULL,
	[FromDate] [datetime] NOT NULL,
	[ToDate] [datetime] NOT NULL,
	[IsReturned] [bit] NOT NULL,
	[BookId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.Borrow] PRIMARY KEY CLUSTERED 
(
	[BorrowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[DictBookGenre]    Script Date: 1/30/2020 1:31:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DictBookGenre](
	[BookGenreId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_dbo.DictBookGenre] PRIMARY KEY CLUSTERED 
(
	[BookGenreId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 1/30/2020 1:31:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NOT NULL,
	[LastName] [nvarchar](max) NOT NULL,
	[BirthDate] [datetime] NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NULL,
	[AddDate] [datetime] NOT NULL,
	[ModifiedDate] [datetime] NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_dbo.User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Book] ON 
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (1, N'henryk sienkeiwicz', N'krzyzacy', CAST(N'1911-11-11T00:00:00.000' AS DateTime), N'asdwqe', 1447, CAST(N'2020-01-01T00:00:00.000' AS DateTime), CAST(N'2020-01-24T09:45:42.253' AS DateTime), 1)
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (3, N'Sapkowski', N'scyzor przeznaczenia', CAST(N'2000-01-01T00:00:00.000' AS DateTime), N'123sad', 1, CAST(N'2000-01-01T00:00:00.000' AS DateTime), CAST(N'2020-01-24T09:43:27.550' AS DateTime), 2)
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (4, N'Martin', N'Clean code', CAST(N'2000-01-01T00:00:00.000' AS DateTime), N'12435-sdf34', 41, CAST(N'2000-01-01T00:00:00.000' AS DateTime), CAST(N'2020-01-24T09:43:27.550' AS DateTime), 1)
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (11, N'Me', N'Webpack hard', CAST(N'3333-11-10T23:00:00.000' AS DateTime), N'876-34tgh', 0, CAST(N'2020-01-14T15:11:12.977' AS DateTime), CAST(N'2020-01-23T20:16:19.660' AS DateTime), 1)
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (14, N'Person', N'Or Well', CAST(N'2020-01-05T23:00:00.000' AS DateTime), N'123', 41, CAST(N'2020-01-15T19:20:47.983' AS DateTime), CAST(N'2020-01-24T09:43:27.550' AS DateTime), 2)
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (15, N'Nowy Pan', N'Nowa książka', NULL, N'235234-23', 4, CAST(N'2020-01-19T10:12:09.027' AS DateTime), CAST(N'2020-01-24T09:43:36.680' AS DateTime), 4)
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (16, N'Sapkowski', N'Pani z kałuży', NULL, N'1324-123f', 213, CAST(N'2020-01-24T11:45:50.660' AS DateTime), NULL, 1)
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (17, N'Adam Mickiewicz', N'Starsi panowie', NULL, N'72311-8997', 312, CAST(N'2020-01-24T11:48:11.980' AS DateTime), NULL, 5)
GO
INSERT [dbo].[Book] ([BookId], [Author], [Title], [ReleaseDate], [ISBN], [Count], [AddDate], [ModifiedDate], [BookGenreId]) VALUES (18, N'三浦 建太郎', N'ベルセルク', CAST(N'1990-09-25T22:00:00.000' AS DateTime), N'978-4-59-213574-6', 1, CAST(N'2020-01-30T16:08:20.910' AS DateTime), NULL, 2)
GO
SET IDENTITY_INSERT [dbo].[Book] OFF
GO
SET IDENTITY_INSERT [dbo].[Borrow] ON 
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (1, CAST(N'2020-01-01T00:00:00.000' AS DateTime), CAST(N'2020-01-24T09:07:47.647' AS DateTime), 1, 1, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (4, CAST(N'2000-01-01T00:00:00.000' AS DateTime), CAST(N'2000-01-02T00:00:00.000' AS DateTime), 1, 3, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (5, CAST(N'2000-01-01T00:00:00.000' AS DateTime), CAST(N'2000-01-11T00:00:00.000' AS DateTime), 1, 4, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (6, CAST(N'2020-01-01T00:00:00.000' AS DateTime), CAST(N'2020-01-24T09:07:58.983' AS DateTime), 1, 3, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (7, CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2019-02-01T00:00:00.000' AS DateTime), 1, 1, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (9, CAST(N'2020-01-18T19:22:22.930' AS DateTime), CAST(N'2020-01-18T20:45:47.887' AS DateTime), 1, 1, 4)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (10, CAST(N'2020-01-18T19:22:22.930' AS DateTime), CAST(N'2020-01-18T20:45:22.267' AS DateTime), 1, 4, 4)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (11, CAST(N'2020-01-18T21:15:22.133' AS DateTime), CAST(N'2020-01-18T21:27:05.300' AS DateTime), 1, 1, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (12, CAST(N'2020-01-18T21:15:22.133' AS DateTime), CAST(N'2020-01-19T10:34:14.607' AS DateTime), 1, 11, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (13, CAST(N'2020-01-18T21:15:22.133' AS DateTime), CAST(N'2020-01-19T09:26:59.927' AS DateTime), 1, 14, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (14, CAST(N'2020-01-18T21:21:46.843' AS DateTime), CAST(N'2020-01-18T21:25:48.927' AS DateTime), 1, 4, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (15, CAST(N'2020-01-18T21:23:11.443' AS DateTime), CAST(N'2020-01-18T21:25:33.433' AS DateTime), 1, 3, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (16, CAST(N'2020-01-18T21:28:01.310' AS DateTime), CAST(N'2020-01-19T09:27:00.000' AS DateTime), 1, 1, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (17, CAST(N'2020-01-19T09:27:23.993' AS DateTime), CAST(N'2020-01-19T09:27:39.890' AS DateTime), 1, 1, 4)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (18, CAST(N'2020-01-19T09:27:23.993' AS DateTime), CAST(N'2020-01-19T09:27:39.907' AS DateTime), 1, 3, 4)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (19, CAST(N'2020-01-19T09:27:23.993' AS DateTime), CAST(N'2020-01-19T09:27:39.920' AS DateTime), 1, 4, 4)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (20, CAST(N'2020-01-19T09:27:23.993' AS DateTime), CAST(N'2020-01-19T09:27:33.413' AS DateTime), 1, 14, 4)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (21, CAST(N'2020-01-19T10:34:06.540' AS DateTime), CAST(N'2020-01-19T10:34:26.660' AS DateTime), 1, 1, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (22, CAST(N'2020-01-19T10:34:06.540' AS DateTime), CAST(N'2020-01-19T10:34:26.673' AS DateTime), 1, 4, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (23, CAST(N'2020-01-19T11:06:59.417' AS DateTime), CAST(N'2020-01-19T11:07:04.863' AS DateTime), 1, 4, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (24, CAST(N'2020-01-19T11:06:59.417' AS DateTime), CAST(N'2020-01-19T11:07:04.873' AS DateTime), 1, 11, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (25, CAST(N'2020-01-19T11:06:59.417' AS DateTime), CAST(N'2020-01-19T11:07:04.887' AS DateTime), 1, 14, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (26, CAST(N'2020-01-19T11:06:59.417' AS DateTime), CAST(N'2020-01-19T11:07:04.900' AS DateTime), 1, 15, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (27, CAST(N'2020-01-19T11:10:33.937' AS DateTime), CAST(N'2020-01-19T11:10:44.940' AS DateTime), 1, 3, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (28, CAST(N'2020-01-19T11:10:33.937' AS DateTime), CAST(N'2020-01-19T11:10:44.950' AS DateTime), 1, 14, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (29, CAST(N'2020-01-19T11:39:25.847' AS DateTime), CAST(N'2020-01-19T11:39:32.937' AS DateTime), 1, 1, 2)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (30, CAST(N'2020-01-19T11:39:25.847' AS DateTime), CAST(N'2020-01-19T11:39:32.977' AS DateTime), 1, 4, 2)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (31, CAST(N'2020-01-21T11:50:48.127' AS DateTime), CAST(N'2020-01-23T20:17:04.000' AS DateTime), 1, 1, 5)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (32, CAST(N'2020-01-21T11:50:55.757' AS DateTime), CAST(N'2020-01-23T20:17:05.860' AS DateTime), 1, 1, 6)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (33, CAST(N'2020-01-21T11:51:05.250' AS DateTime), CAST(N'2020-02-21T11:51:05.250' AS DateTime), 0, 1, 3)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (34, CAST(N'2020-01-23T20:16:19.660' AS DateTime), CAST(N'2020-02-23T20:16:19.660' AS DateTime), 0, 11, 2)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (35, CAST(N'2020-01-24T09:08:18.643' AS DateTime), CAST(N'2020-01-24T09:08:26.160' AS DateTime), 1, 1, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (36, CAST(N'2020-01-24T09:08:18.643' AS DateTime), CAST(N'2020-01-24T09:08:52.607' AS DateTime), 1, 3, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (37, CAST(N'2020-01-24T09:08:18.643' AS DateTime), CAST(N'2020-01-24T09:41:43.253' AS DateTime), 1, 4, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (38, CAST(N'2020-01-24T09:08:18.643' AS DateTime), CAST(N'2020-01-24T09:16:10.510' AS DateTime), 1, 14, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (39, CAST(N'2020-01-24T09:08:18.643' AS DateTime), CAST(N'2020-01-24T09:43:36.667' AS DateTime), 1, 15, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (40, CAST(N'2020-01-24T09:43:27.550' AS DateTime), CAST(N'2020-01-24T09:45:42.240' AS DateTime), 1, 1, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (41, CAST(N'2020-01-24T09:43:27.550' AS DateTime), CAST(N'2020-02-24T09:43:27.550' AS DateTime), 0, 3, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (42, CAST(N'2020-01-24T09:43:27.550' AS DateTime), CAST(N'2020-02-24T09:43:27.550' AS DateTime), 0, 4, 1)
GO
INSERT [dbo].[Borrow] ([BorrowId], [FromDate], [ToDate], [IsReturned], [BookId], [UserId]) VALUES (43, CAST(N'2020-01-24T09:43:27.550' AS DateTime), CAST(N'2020-02-24T09:43:27.550' AS DateTime), 0, 14, 1)
GO
SET IDENTITY_INSERT [dbo].[Borrow] OFF
GO
SET IDENTITY_INSERT [dbo].[DictBookGenre] ON 
GO
INSERT [dbo].[DictBookGenre] ([BookGenreId], [Name]) VALUES (1, N'Education')
GO
INSERT [dbo].[DictBookGenre] ([BookGenreId], [Name]) VALUES (2, N'Fantasy')
GO
INSERT [dbo].[DictBookGenre] ([BookGenreId], [Name]) VALUES (3, N'Cooking')
GO
INSERT [dbo].[DictBookGenre] ([BookGenreId], [Name]) VALUES (4, N'Sci-fi')
GO
INSERT [dbo].[DictBookGenre] ([BookGenreId], [Name]) VALUES (5, N'Health')
GO
SET IDENTITY_INSERT [dbo].[DictBookGenre] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 
GO
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [BirthDate], [Email], [Phone], [AddDate], [ModifiedDate], [IsActive]) VALUES (1, N'Gerwant', N'Gal', CAST(N'2012-06-17T00:00:00.000' AS DateTime), N'aasdf@dummy.tmp', NULL, CAST(N'2020-01-11T00:00:00.000' AS DateTime), CAST(N'2020-01-12T10:22:09.060' AS DateTime), 1)
GO
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [BirthDate], [Email], [Phone], [AddDate], [ModifiedDate], [IsActive]) VALUES (2, N'eOsoba', N'Informat', CAST(N'2002-06-18T00:00:00.000' AS DateTime), N'nasd@dummy.tmp', N'555-555 ', CAST(N'2020-01-11T22:11:47.290' AS DateTime), NULL, 1)
GO
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [BirthDate], [Email], [Phone], [AddDate], [ModifiedDate], [IsActive]) VALUES (3, N'Adam', N'Sienkiewicz', CAST(N'1997-08-27T00:00:00.000' AS DateTime), N'sda@asd.pl', N'666999666', CAST(N'2020-01-11T22:12:33.047' AS DateTime), NULL, 0)
GO
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [BirthDate], [Email], [Phone], [AddDate], [ModifiedDate], [IsActive]) VALUES (4, N'Osoba', N'Losowa', CAST(N'1999-02-11T00:00:00.000' AS DateTime), N'etrd@sgddx.eff', NULL, CAST(N'2020-01-12T00:00:00.000' AS DateTime), CAST(N'2020-01-12T10:22:27.923' AS DateTime), 1)
GO
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [BirthDate], [Email], [Phone], [AddDate], [ModifiedDate], [IsActive]) VALUES (5, N'Krystian', N'Kowalski', CAST(N'2020-01-01T00:00:00.000' AS DateTime), N'qwe@qwe', NULL, CAST(N'2020-01-21T11:41:24.127' AS DateTime), NULL, 1)
GO
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [BirthDate], [Email], [Phone], [AddDate], [ModifiedDate], [IsActive]) VALUES (6, N'Adam', N'Adamowicz', CAST(N'2000-02-02T00:00:00.000' AS DateTime), N'kol@kol.as', NULL, CAST(N'2020-01-21T11:42:41.057' AS DateTime), NULL, 1)
GO
SET IDENTITY_INSERT [dbo].[User] OFF
GO
/****** Object:  Index [IX_BookGenreId]    Script Date: 1/30/2020 1:31:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_BookGenreId] ON [dbo].[Book]
(
	[BookGenreId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_BookId]    Script Date: 1/30/2020 1:31:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_BookId] ON [dbo].[Borrow]
(
	[BookId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_UserId]    Script Date: 1/30/2020 1:31:28 PM ******/
CREATE NONCLUSTERED INDEX [IX_UserId] ON [dbo].[Borrow]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Borrow] ADD  DEFAULT ((0)) FOR [IsReturned]
GO
ALTER TABLE [dbo].[User] ADD  DEFAULT ((0)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Book]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Book_dbo.DictBookGenre_BookGenreId] FOREIGN KEY([BookGenreId])
REFERENCES [dbo].[DictBookGenre] ([BookGenreId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Book] CHECK CONSTRAINT [FK_dbo.Book_dbo.DictBookGenre_BookGenreId]
GO
ALTER TABLE [dbo].[Borrow]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Borrow_dbo.Book_BookId] FOREIGN KEY([BookId])
REFERENCES [dbo].[Book] ([BookId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Borrow] CHECK CONSTRAINT [FK_dbo.Borrow_dbo.Book_BookId]
GO
ALTER TABLE [dbo].[Borrow]  WITH CHECK ADD  CONSTRAINT [FK_dbo.Borrow_dbo.User_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Borrow] CHECK CONSTRAINT [FK_dbo.Borrow_dbo.User_UserId]
GO
USE [master]
GO
ALTER DATABASE [spyrosoft] SET  READ_WRITE 
GO
