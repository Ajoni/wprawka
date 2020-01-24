import React, { Component } from "react";
import MaterialTable from 'material-table'

class BorrowsHistoryTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MaterialTable
                columns={[
                    { title: 'UserName', field: 'UserName' },
                    { title: 'BirthDate', field: 'BirthDate', type: 'date' },
                    { title: 'Email', field: 'Email' },
                    { title: 'Phone', field: 'Phone' },
                    { title: 'FromDate', field: 'FromDate', type: 'date' },
                    { title: 'ToDate', field: 'ToDate', type: 'date' }
                ]}
                title="Borrows history"
                data={this.props.rows}
                options={{ search: false }}
            />
        );
    }
}

export default BorrowsHistoryTable;