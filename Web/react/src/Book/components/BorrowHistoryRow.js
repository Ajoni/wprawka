import React, { Component } from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class BorrowHistoryRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const row = this.props.row;
        return (
            <TableRow >
                <TableCell>{row.UserName}</TableCell>
                <TableCell>{row.BirthDate}</TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>{row.Phone}</TableCell>
                <TableCell>{new Date(row.FromDate).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(row.ToDate).toLocaleDateString()}</TableCell>
            </TableRow>
        );
    };
}

export default BorrowHistoryRow;