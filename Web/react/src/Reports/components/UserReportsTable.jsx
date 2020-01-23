import React, { Component } from "react";
import MaterialTable from 'material-table'
import ReportsService from './../services/ReportsService.jsx';

class UserReportsTable extends React.Component {
    constructor(props) {
        super(props);
        this.reportsService = new ReportsService();

        this.state = { initial: true };
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.initial === false) {
            return false;
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
                FilterLastName: q.filters[0] ? q.filters[0].value : '',
                Page: q.page,
                Size: q.pageSize
            }
            this.reportsService.getTopUsers(vm)
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
                    { title: 'FirstName', field: 'FirstName', filtering: false },
                    {
                        title: 'LastName', field: 'LastName',
                        defaultFilter: '',
                        customFilterAndSearch: (term, rowData) => rowData.LastName.startsWith(term)
                    },
                    { title: 'Email', field: 'Email', filtering: false },
                    { title: 'Phone', field: 'Phone', filtering: false },
                    { title: 'BorrowCount', field: 'BorrowCount', type: 'numeric', filtering: false }
                ]}
                title="Top borrowers"
                data={(q) => this.getData(q)}
                options={{
                    filtering: true,
                    search: false,
                    debounceInterval: 600
                }}
            />
        );
    }
}

export default UserReportsTable;