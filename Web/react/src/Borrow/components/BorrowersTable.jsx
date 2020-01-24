import React, { Component } from "react";
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import BorrowService from './../services/BorrowService';

class BorrowersTable extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();
        this.state = { borrowers: []};
    }

    componentDidMount() {
        this.borrowService.getBorrowers()
            .then(res => {
                this.setState({
                    borrowers: res
                });
            });
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
                data={this.state.borrowers}
                options={{ search: false }}
            />
        );
    }
}

export default BorrowersTable;