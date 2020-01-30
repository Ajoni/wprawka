import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import BooksTable from './BooksTable.jsx';
import BookService from '../services/BookService.js';


class Books extends React.Component {
    constructor(props) {
        super(props);
        this.bookService = new BookService();
        this.state = { books: [], BookDialog: null, isAdding: false };
    }

    componentDidMount() {
        this.bookService.getAll()
            .then(res => {
                this.setState({
                    books: res
                });
            });
        this.bookService.getBookGenres()
            .then(res => {
                this.setState({
                    genres: res.map(item => ({ id: item.BookGenreId, display: item.Name }))
                });
            });
    }

    onBookDialogSubmit(book, oldBook) {
        const index = this.state.books.indexOf(oldBook);
        const books = [...this.state.books];

        if (index !== -1)
            books[index] = book;
        else
            books.push(book);

        this.setState({ books });
    }

    render() {
        let { BookDialog } = this.state;
        return (
            <div>
                {BookDialog ? <BookDialog open={this.state.isAdding} title="Add a book" submitText="Add"
                    onClose={() => this.setState({ isAdding: false })} bookGenres={this.state.genres}
                    onSubmit={(book)=>this.onBookDialogSubmit(book)}
                /> : null}
                <Button variant="contained" color="default" onClick={() => this.showAddModal()}>Add new</Button>
                <BooksTable rows={this.state.books} showButtons={true} bookGenres={this.state.genres} onBookDialogSubmit={this.onBookDialogSubmit.bind(this)}/>
            </div >
        );
    }

    showAddModal() {
        import(/* webpackChunkName: "BookDialog" */'./BookDialog.jsx').then(module => {
            this.setState({ BookDialog: module.default, isAdding: true });
        });
    }
}
export default Books;