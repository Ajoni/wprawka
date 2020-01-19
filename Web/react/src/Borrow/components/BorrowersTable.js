import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BorrowerRow from './BorrowerRow';
import BorrowService from './../services/BorrowService';

class BorrowersTable extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();
        this.state = { borrowers: [], BorrowDialog: null, isAdding: false };
    }

    componentDidMount() {
        this.borrowService.getBorrowers()
            .then(res => {
                this.setState({
                    borrowers: res
                });
            });
    }

    render() {
        const buttonsCol = this.props.showButtons ? (<TableCell></TableCell>) : null;

        return (
            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>UserName</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>AmountBorrowed</TableCell>
                            {buttonsCol}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.borrowers.map((row, i) => (
                            <BorrowerRow key={i} row={row} showButtons={this.props.showButtons} />
                        ))}
                    </TableBody>
                </Table>
            </Paper >
        );
    };
}

export default BorrowersTable;