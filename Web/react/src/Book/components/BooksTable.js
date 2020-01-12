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
import BookRow from './BookRow';

class BooksTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const buttonsCol = this.props.showButtons ? (<TableCell></TableCell>) : null;
    
        return (
            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Author</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>ReleaseDate</TableCell>
                            <TableCell>ISBN</TableCell>
                            <TableCell>Count</TableCell>
                            <TableCell>AddDate</TableCell>
                            <TableCell>ModifiedDate</TableCell>
                            <TableCell>Genre</TableCell>
                            {buttonsCol}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.rows.map((row, i) => (
                            <BookRow key={i} row={row} showButtons={this.props.showButtons} />
                        ))}
                    </TableBody>
                </Table>
            </Paper >
        );
    };
}

export default BooksTable;