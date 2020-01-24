import React, { Component } from "react";
import MaterialTable from 'material-table'


class BorrowsTable extends React.Component {
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
                    { title: 'FromDate', field: 'FromDate', type: 'date' }
                ]}
                title="Borrows"
                data={this.props.rows}
                options={{ search: false }}
            />
        );
    }
}

export default BorrowsTable;