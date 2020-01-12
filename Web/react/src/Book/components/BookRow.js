import React, { Component } from "react";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class BookRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { BookDialog: null, Edit: false };
    }

    showEditModal = () => {
        import(/* webpackChunkName: "BookDialog" */'./BookDialog').then(module => {
            this.setState({ BookDialog: module.default, Edit: true });
        });
    };

    render() {
        let { BookDialog } = this.state;
        const row = this.props.row;
        const buttons = this.props.showButtons ?
            (<TableCell>
                {BookDialog ? <BookDialog book={row} title="Update" submitText="Update"
                    open={this.state.Edit} onClose={() => this.setState({ Edit: false })}
                /> : null}
                <Button variant="contained" color="default" onClick={() => this.showEditModal()}>Edit</Button>
                <Link
                    color="textPrimary" aria-current="page"
                    to={`/Home/Books/${row.BookId}`}>
                    <Button variant="contained" color="default">
                        Details
                </Button></Link>
            </TableCell>) : null;
        return (
            <TableRow >
                <TableCell>{row.Author}</TableCell>
                <TableCell>{row.Title}</TableCell>
                <TableCell>{row.ReleaseDate ? new Date(row.ReleaseDate).toLocaleDateString() : ''}</TableCell>
                <TableCell>{row.ISBN}</TableCell>
                <TableCell>{row.Count}</TableCell>
                <TableCell>{row.AddDate ? new Date(row.AddDate).toLocaleDateString() : ''}</TableCell>
                <TableCell>{row.ModifiedDate ? new Date(row.ModifiedDate).toLocaleDateString() : ''}</TableCell>
                <TableCell>{row.BookGenre.Name}</TableCell>
                {buttons}
            </TableRow>
        );
    };
}

export default BookRow;