import React, { Component } from "react";
import MaterialTable, { MTableFilterRow } from 'material-table'
import ReportsService from './../services/ReportsService.jsx';
import BookReportsFilter from "./BookReportsFilter.jsx";

class BookReportsTable extends React.Component {
    constructor(props) {
        super(props);
        this.reportsService = new ReportsService();

        this.state = { initial: true };
    }

    createFilterProps(filters) {
        const props = {
            BookGenre: { BookGenreId: -1, Name: "" },
            Title: ""
        };

        filters.forEach(f => {
            if (f.value === null)
                return;

            props[f.column.field] = f.value;
        });

        return props;
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
                ...this.createFilterProps(q.filters),
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
                columns={[
                    { title: 'Author', field: 'Author', filtering: false },
                    {
                        title: 'Title', field: 'Title', defaultFilter: ''
                    },
                    { title: 'ReleaseDate', field: 'ReleaseDate', type: 'date', filtering: false },
                    { title: 'ISBN', field: 'ISBN', filtering: false },
                    { title: 'Genre', field: 'BookGenre', filtering: false },
                    { title: 'BorrowCount', field: 'BorrowCount', type: 'numeric', filtering: false }
                ]}
                title="Top books"
                data={(q) => this.getData(q)}
                options={{
                    filtering: true,
                    search: false,
                    debounceInterval: 600
                }}
                components={{
                    FilterRow: props => {
                        return (<BookReportsFilter{...props} />);
                    }
                }}
            />
        );
    }
}

export default BookReportsTable;