import React, { Component } from "react";
import MaterialTable, { MTableToolbar } from 'material-table'
import ReportsService from './../services/ReportsService.jsx';

class BookReportsTable extends React.Component {
    constructor(props) {
        super(props);
        this.reportsService = new ReportsService();
        this.tableRef = React.createRef();
        this.state = { initial: true };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.filter !== nextProps.filter) {
            this.tableRef.current && this.tableRef.current.onQueryChange();
        }

        return true;
    }

    getData(q) {
        return new Promise((resolve, reject) => {
            if (this.state.initial) {
                this.setState({ initial: false });
                return resolve({
                    data: this.props.initialData.Data,
                    page: this.props.initialData.Page,
                    totalCount: this.props.initialData.TotalCount
                });
            }

            const vm = {
                ...this.props.filter,
                Page: q.page,
                Size: q.pageSize
            }
            this.reportsService.getTopBooks(vm)
                .then(result => {
                    resolve({
                        data: result.Data,
                        page: result.Page,
                        totalCount: result.TotalCount
                    });
                });
        }
        );
    }


    render() {

        return (
            <MaterialTable
                tableRef={this.tableRef}
                columns={[
                    { title: 'Author', field: 'Author' },
                    {
                        title: 'Title', field: 'Title', defaultFilter: ''
                    },
                    { title: 'ReleaseDate', field: 'ReleaseDate', type: 'date' },
                    { title: 'ISBN', field: 'ISBN' },
                    { title: 'Genre', field: 'BookGenre' },
                    { title: 'BorrowCount', field: 'BorrowCount', type: 'numeric' }
                ]}
                title="Top books"
                data={(q) => this.getData(q)}
                options={{
                    search: false,
                    debounceInterval: 600
                }}
            />
        );
    }
}

export default BookReportsTable;