import React, { Component } from "react";
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class BooksTable extends React.Component {
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
        const columns =
            [
                { title: 'Author', field: 'Author' },
                { title: 'Title', field: 'Title' },
                { title: 'ReleaseDate', field: 'ReleaseDate', type: 'date' },
                { title: 'ISBN', field: 'ISBN' },
                { title: 'Count', field: 'Count', type: 'numeric' },
                { title: 'AddDate', field: 'AddDate', type: 'date' },
                { title: 'ModifiedDate', field: 'ModifiedDate', type: 'date' },
                { title: 'Genre', field: 'BookGenre.Name' },
            ];

        if (this.props.showButtons)
            columns.push({
                title: 'Actions', field: 'BookId',
                render: row => <div>
                    {BookDialog
                        ? <BookDialog book={row} title="Update" submitText="Update"
                            open={this.state.Edit} onClose={() => this.setState({ Edit: false })} />
                        : null}
                    <Button variant="contained" color="default" onClick={() => this.showEditModal()}>Edit</Button>
                    <Link color="textPrimary" aria-current="page"
                        to={`/Home/Books/${row.BookId}`}>
                        <Button variant="contained" color="default">Details</Button>
                    </Link>
                </div >
            });

        const options = { search: false };
        if (this.props.pageSize)
            options['pageSize'] = this.props.pageSize;
        if (this.props.paging)
            options['paging'] = this.props.paging;

        return (
            <MaterialTable
                columns={columns}
                title={this.props.title ? this.props.title : "Books"}
                data={this.props.rows}
                options={options}
            />
        );
    }
}

export default BooksTable;