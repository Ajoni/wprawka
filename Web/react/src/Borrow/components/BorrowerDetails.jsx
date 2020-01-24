import React, { Component } from "react";
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/styles';
import BorrowService from './../services/BorrowService';

const styles = theme => ({
    root: {
        padding: '10px',
    },
});

class BorrowerDetails extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();
        this.state = { borrowedBooks: [], selectedAny: false };
    }

    componentDidMount() {
        this.borrowService.getBorrowerDetails(this.props.match.params.id)
            .then(res => {
                res.Borrows.forEach(b =>
                    b.isChecked = false
                );
                this.setState({
                    borrowedBooks: [...res.Borrows]
                });
            });
    }

    onCheckboxChange(row) {
        row.isChecked = !row.isChecked;
        const selectedAny = this.state.borrowedBooks.some(b => b.isChecked === true);
        this.setState({ selectedAny });

    }

    returnSelected() {
        const checked = this.state.borrowedBooks.filter(b => b.isChecked === true);
        const borrowedBooks = this.state.borrowedBooks.filter(b => b.isChecked === false);

        this.borrowService.returnBooks(checked.map((b => ({
            UserId: b.UserId,
            BookId: b.BookId,
            BorrowId: b.BorrowId
        }))));

        this.setState({
            borrowedBooks,
            selectedAny: false
        });

    }

    render() {
        const { classes } = this.props;
        return (
            <Paper>
                <MaterialTable
                    columns={[
                        { title: 'Author', field: 'Author' },
                        { title: 'Title', field: 'Title' },
                        { title: 'Genre', field: 'Genre' },
                        { title: 'FromDate', field: 'FromDate', type: 'date' },
                        {
                            title: 'Return?', field: 'BookId',
                            render: rowData => <Checkbox checked={rowData.isChecked} value={rowData.isChecked} color="primary"
                                inputProps={{ 'aria-label': 'return book checkbox' }}
                                onChange={() => this.onCheckboxChange(rowData)} />
                        }
                    ]}
                    title="Borrower details"
                    data={this.state.borrowedBooks}
                    options={{ search: false }}
                />
                <Grid container alignItems="flex-start" justify="flex-end" direction="row" className={classes.root}>
                    <Button disabled={!this.state.selectedAny} variant="contained" color="default"
                        onClick={() => this.returnSelected()}>
                        Return selected</Button>
                </Grid>
            </Paper >
        );
    }
}

export default withStyles(styles)(BorrowerDetails);