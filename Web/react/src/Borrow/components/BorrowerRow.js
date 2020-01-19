import React, { Component } from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class BorrowerRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { BookDialog: null, Edit: false };
    }

    render() {
        const row = this.props.row;
        const buttons = this.props.showButtons ?
            (<TableCell>
                <Link color="textPrimary" aria-current="page"
                    to={`/Home/Borrow/Borrower-${row.UserId}`}>
                    <Button variant="contained" color="default" >Details</Button>
                </Link>
            </TableCell>) : null;
        return (
            <TableRow >
                <TableCell>{row.UserName}</TableCell>
                <TableCell>{row.Email}</TableCell>
                <TableCell>{row.Phone}</TableCell>
                <TableCell>{row.AmountBorrowed}</TableCell>
                {buttons}
            </TableRow>
        );
    };
}

export default BorrowerRow;