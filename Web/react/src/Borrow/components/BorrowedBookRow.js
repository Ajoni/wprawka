import React, { Component } from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import BorrowService from './../services/BorrowService';

class BorrowedBookRow extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();
        this.state = { BookDialog: null, Edit: false };
    }

    returnBook(book) {
        this.borrowService.returnBooks([{
            UserId: book.UserId,
            BookId: book.BookId,
            BorrowId: book.BorrowId
        }]);
        this.props.onReturn(book.BorrowId);
    }

    render() {
        const row = this.props.row;
        const buttons = this.props.showButtons ?
            (<TableCell>
                <Button variant="contained" color="default" onClick={() => this.returnBook(row)}>Return</Button>
            </TableCell>) : null;
        return (
            <TableRow >
                <TableCell>{row.Author}</TableCell>
                <TableCell>{row.Title}</TableCell>
                <TableCell>{row.UserName}</TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>{row.Phone}</TableCell>
                <TableCell>{row.FromDate ? new Date(row.FromDate).toLocaleDateString() : ''}</TableCell>
                {buttons}
            </TableRow>
        );
    };
}

export default BorrowedBookRow;