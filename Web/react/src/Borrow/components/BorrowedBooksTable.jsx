import React, { Component } from "react";
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import BorrowDialog from './BorrowDialog.jsx';
import BorrowService from './../services/BorrowService';

class BorrowedBooksTable extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();
        this.state = { BorrowDialog: null, isBorrowing: false };
    }

    render() {
        return (
            <Paper>
                <BorrowDialog open={this.state.isBorrowing} title="Borrow" onClose={() => this.setState({ isBorrowing: false })}
                    onSubmit={(borrowVM) => this.props.onBorrowSubmit(borrowVM)} />
                <MaterialTable
                    columns={[
                        { title: 'Author', field: 'Author' },
                        { title: 'Title', field: 'Title' },
                        { title: 'UserName', field: 'UserName' },
                        { title: 'Email', field: 'Email' },
                        { title: 'Phone', field: 'Phone' },
                        { title: 'FromDate', field: 'FromDate', type: 'date' },
                        {
                            title: 'Actions', field: 'BookId',
                            render: rowData => <Button variant="contained" color="default" onClick={() => this.props.returnBook(rowData)}>Return</Button>
                        }
                    ]}
                    title="Borrowed books"
                    data={this.props.borrowedBooks}
                    options={{ search: false }}
                    actions={[
                        {
                            icon: 'add',
                            tooltip: 'Borrow',
                            isFreeAction: true,
                            onClick: (e) => this.setState({ isBorrowing: true })
                        }
                    ]}
                />
            </Paper>

        );
    }
}

export default BorrowedBooksTable;