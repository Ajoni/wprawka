import React, { Component } from "react";

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import BorrowedBooksTable from './BorrowedBooksTable.js';
import BorrowersTable from './BorrowersTable.js';

const styles = theme => ({
    root: {
        padding: '10px',
    },
});

class Borrows extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <BorrowedBooksTable showButtons={true} />
                <Grid container alignItems="flex-start" justify="flex-end" direction="row" className={classes.root}/>
                <BorrowersTable showButtons={true} />
            </div >
        );
    }

}
export default withStyles(styles)(Borrows);