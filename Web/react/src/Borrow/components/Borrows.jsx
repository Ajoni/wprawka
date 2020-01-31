import React, { Component } from "react";

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import BorrowService from '../services/BorrowService';
import BorrowedBooksTable from './BorrowedBooksTable.jsx';
import BorrowersTable from './BorrowersTable.jsx';

const styles = theme => ({
    root: {
        padding: '10px',
    },
});

class Borrows extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();

        this.state = { borrowedBooks: [], borrowers:[] };
    }

    componentDidMount() {
        this.borrowService.getBorrowedBooks()
            .then(res => {
                this.setState({
                    borrowedBooks: res
                });
            });
        this.borrowService.getBorrowers()
            .then(res => {
                this.setState({
                    borrowers: res
                });
            });
    }

    removeBorrow(borrowedBook) {
        const borrowedBooks = this.state.borrowedBooks.filter(b => b.BorrowId !== borrowedBook.BorrowId);
        var borrowers = [...this.state.borrowers];
        const borrower = borrowers.find(b => b.UserId === borrowedBook.UserId);
        if (borrower) {
            borrower.AmountBorrowed--;
            if (borrower.AmountBorrowed === 0)
                borrowers = borrowers.filter(b => b.UserId !== borrowedBook.UserId);
        }

        this.setState({
            borrowedBooks,
            borrowers
        });
    }
    returnBook(borrowedBook) {
        this.borrowService.returnBooks([{
            UserId: borrowedBook.UserId,
            BookId: borrowedBook.BookId,
            BorrowId: borrowedBook.BorrowId
        }]);
        this.removeBorrow(borrowedBook);
    }

    borrowSubmit(res) {
        const borrowedBooks = [...this.state.borrowedBooks];
        const borrowers = [...this.state.borrowers];
        borrowedBooks.push(...res.BorrowedBooks);

        const borrowerIndex = borrowers.findIndex(b => b.UserId === res.Borrower.UserId);
        if (borrowerIndex === -1)
            borrowers.push(res.Borrower);
        else
            borrowers[borrowerIndex] = res.Borrower;

        this.setState({
            borrowedBooks,
            borrowers
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <BorrowedBooksTable borrowedBooks={this.state.borrowedBooks}
                    showButtons={true} returnBook={this.returnBook.bind(this)} onBorrowSubmit={this.borrowSubmit.bind(this)} />
                <Grid container alignItems="flex-start" justify="flex-end" direction="row" className={classes.root}/>
                <BorrowersTable showButtons={true} borrowers={this.state.borrowers} />
            </div >
        );
    }

}
export default withStyles(styles)(Borrows);