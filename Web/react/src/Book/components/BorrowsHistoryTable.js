import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BorrowHistoryRow from './BorrowHistoryRow';

class BorrowsHistoryTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>UserName</TableCell>
                            <TableCell>BirthDate</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>FromDate</TableCell>
                            <TableCell>ToDate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.rows.map((row, i) => (
                            <BorrowHistoryRow key={i} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </Paper >
        );
    };
}

export default BorrowsHistoryTable;