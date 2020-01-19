import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BorrowedBookRow from './BorrowedBookRow';
import BorrowDialog from './BorrowDialog';
import BorrowService from './../services/BorrowService';

class BorrowedBooksTable extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();
        this.state = { borrowedBooks: [], BorrowDialog: null, isBorrowing: false };
    }

    componentDidMount() {
        this.borrowService.getBorrowedBooks()
            .then(res => {
                this.setState({
                    borrowedBooks: res
                });
            });
    }
    removeBorrow(id) {
        const borrowedBooks = this.state.borrowedBooks.filter(b => b.BorrowId!==id);
        this.setState({
            borrowedBooks
        });
    }

    render() {
        const buttonsCol = this.props.showButtons ? (<TableCell></TableCell>) : null;

        return (
            <Paper>
                <BorrowDialog open={this.state.isBorrowing} title="Borrow" onClose={() => this.setState({ isBorrowing: false })}
                />
                <Button variant="contained" color="default" onClick={() => this.setState({ isBorrowing: true })}>Borrow</Button>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Author</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>UserName</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>FromDate</TableCell>
                            {buttonsCol}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.borrowedBooks.map((row, i) => (
                            <BorrowedBookRow key={i} row={row} showButtons={this.props.showButtons} onReturn={(id) => this.removeBorrow(id)}/>
                        ))}
                    </TableBody>
                </Table>
            </Paper >
        );
    };
}

export default BorrowedBooksTable;