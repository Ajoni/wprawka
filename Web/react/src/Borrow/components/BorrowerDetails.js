import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import BorrowerDetailsRow from './BorrowerDetailsRow';
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

    onCheckboxChange() {
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
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Author</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>FromDate</TableCell>
                            <TableCell>Return?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.borrowedBooks.map((row, i) => (
                            <BorrowerDetailsRow key={i} row={row} onChange={() => this.onCheckboxChange()} />
                        ))}
                    </TableBody>
                </Table>
                <Grid container alignItems="flex-start" justify="flex-end" direction="row" className={classes.root}>
                    <Button disabled={!this.state.selectedAny} variant="contained" color="default"
                        onClick={() => this.returnSelected()}>
                        Return selected</Button>
                </Grid>
            </Paper >
        );
    };
}

export default withStyles(styles)(BorrowerDetails);