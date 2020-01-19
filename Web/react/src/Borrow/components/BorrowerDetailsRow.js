import React, { Component } from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import Checkbox from '@material-ui/core/Checkbox';

class BorrowerDetailsRow extends React.Component {
    constructor(props) {
        super(props);
    }

    onCheckboxChange() {
        const row = this.props.row;
        row.isChecked = !row.isChecked;
        this.props.onChange();
    }

    render() {
        const row = this.props.row;
        return (
            <TableRow >
                <TableCell>{row.Author}</TableCell>
                <TableCell>{row.Title}</TableCell>
                <TableCell>{row.Genre}</TableCell>
                <TableCell>{row.FromDate ? new Date(row.FromDate).toLocaleDateString() : ''}</TableCell>
                <TableCell>
                    <Checkbox value={row.isChecked} color="primary"
                        inputProps={{ 'aria-label': 'return book checkbox' }}
                        onChange={() => this.onCheckboxChange()} />
                </TableCell>
            </TableRow>
        );
    };
}

export default BorrowerDetailsRow;