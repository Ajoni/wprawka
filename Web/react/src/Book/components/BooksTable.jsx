import React, { Component } from "react";
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class BooksTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = { BookDialog: null, BookToEdit: null };
    }

    showEditModal = (id) => {
        import(/* webpackChunkName: "BookDialog" */'./BookDialog.jsx').then(module => {
            const BookToEdit = this.props.rows.find(r => r.BookId === id);
            this.setState({ BookDialog: module.default, BookToEdit });
        });
    };

    onModalClose() {
        this.setState({ BookToEdit: null });
    }

    render() {
        let { BookDialog } = this.state;
        const columns =
            [
                { title: 'Author', field: 'Author' },
                { title: 'Title', field: 'Title' },
                { title: 'ReleaseDate', field: 'ReleaseDate', type: 'date' },
                { title: 'ISBN', field: 'ISBN' },
                { title: 'Count', field: 'Count', type: 'numeric' },
                { title: 'AddDate', field: 'AddDate', type: 'date' },
                { title: 'ModifiedDate', field: 'ModifiedDate', type: 'date' },
                { title: 'Genre', field: 'Genre' },
            ];

        if (this.props.showButtons)
            columns.push({
                title: 'Actions', field: 'BookId',
                render: row => <div>
                    <Button variant="contained" color="default" onClick={() => this.showEditModal(row.BookId)}>Edit</Button>
                    <Link color="textPrimary" aria-current="page"
                        to={`/Home/Books/${row.BookId}`}>
                        <Button variant="contained" color="default">Details</Button>
                    </Link>
                </div >
            });

        const options = { search: false };
        if (this.props.pageSize)
            options['pageSize'] = this.props.pageSize;
        if (this.props.pageSizeOptions)
            options['pageSizeOptions'] = this.props.pageSizeOptions;

        return (
            <div>
                {BookDialog
                    ? <BookDialog book={this.state.BookToEdit} title="Update" submitText="Update"
                        bookGenres={this.props.bookGenres}
                        onSubmit={(book, oldBook)=>this.props.onBookDialogSubmit(book,oldBook)}
                        open={this.state.BookToEdit !== null} onClose={() => this.onModalClose()} />
                    : null}
                <MaterialTable
                    columns={columns}
                    title={this.props.title ? this.props.title : "Books"}
                    data={this.props.rows}
                    options={options}
                />
            </div>
        );
    }
}

export default BooksTable;