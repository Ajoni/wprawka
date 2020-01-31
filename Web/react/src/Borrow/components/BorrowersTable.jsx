import React, { Component } from "react";
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class BorrowersTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MaterialTable
                columns={[
                    { title: 'UserName', field: 'UserName' },
                    { title: 'Email', field: 'Email' },
                    { title: 'Phone', field: 'Phone' },
                    { title: 'AmountBorrowed', field: 'AmountBorrowed', type: 'numeric' },
                    {
                        title: 'Actions', field: 'UserId',
                        render: rowData => <Link color="textPrimary" aria-current="page"
                            to={`/Home/Borrow/Borrower-${rowData.UserId}`}>
                            <Button variant="contained" color="default" >Details</Button>
                        </Link>
                    }
                ]}
                title="Borrowers"
                data={this.props.borrowers}
                options={{ search: false }}
            />
        );
    }
}

export default BorrowersTable;