import React, { Component } from "react";
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import BorrowDialog from './BorrowDialog';
import BorrowService from './../services/BorrowService';

class BorrowedBooksTable extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();
        this.state = { borrowedBooks: [], BorrowDialog: null, isBorrowing: false };
    }

    componentDidMount() {
        this.borrowService.getBorrowedBooks()
            .then(res => {
                this.setState({
                    borrowedBooks: res
                });
            });
    }
    removeBorrow(id) {
        const borrowedBooks = this.state.borrowedBooks.filter(b => b.BorrowId !== id);
        this.setState({
            borrowedBooks
        });
    }
    returnBook(book) {
        this.borrowService.returnBooks([{
            UserId: book.UserId,
            BookId: book.BookId,
            BorrowId: book.BorrowId
        }]);
        this.removeBorrow(book.BorrowId);
    }
    render() {
        return (
            <Paper>
                <BorrowDialog open={this.state.isBorrowing} title="Borrow" onClose={() => this.setState({ isBorrowing: false })}
                />
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
                            render: rowData => <Button variant="contained" color="default" onClick={() => this.returnBook(rowData)}>Return</Button>
                        }
                    ]}
                    title="Borrowed books"
                    data={this.state.borrowedBooks}
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