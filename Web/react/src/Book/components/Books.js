import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import BooksTable from './BooksTable.js';
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
    }

    render() {
        let { BookDialog } = this.state;
        return (
            <div>
                {BookDialog ? <BookDialog open={this.state.isAdding} title="Add a book" submitText="Add"
                    onClose={() => this.setState({ isAdding: false })}
                    onSubmit={(book) => this.setState({ books: [...this.state.books, book] })}
                /> : null}
                <Button variant="contained" color="default" onClick={() => this.showAddModal()}>Add new</Button>
                <BooksTable rows={this.state.books} showButtons={true}/>
            </div >
        );
    }

    showAddModal() {
        import(/* webpackChunkName: "BookDialog" */'./BookDialog').then(module => {
            this.setState({ BookDialog: module.default, isAdding: true });
        });
    }
}
export default Books;