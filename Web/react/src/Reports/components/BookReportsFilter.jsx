import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import BookService from './../../Book/services/BookService.js';



export default class BookReportsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.bookService = new BookService();
        this.state = { [props.columns[1]]: [], Title: '', [props.columns[4]]: null }
        this.whyWontItClearInputOnReset = React.createRef();
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.initial === false) {
            return false;
        }
        return true;
    }

    componentDidMount() {
        this.bookService.getBookGenres()
            .then(res => this.setState({ BookGenres: res }));
    }

    handleChange(columnDef, value) {
        if (this.state[columnDef.field] === value)
            return;

        this.setState({
            [columnDef.field]: value
        });
        this.props.onFilterChanged(columnDef.tableData.id, value);
    }

    reset() {
        this.handleChange(this.props.columns[1], '');
        this.handleChange(this.props.columns[4], null);
    }

    render() {
        console.log(this.whyWontItClearInputOnReset);

        return (
            <TableRow>
                <TableCell>
                    <Button onClick={() => this.reset()} variant="outlined" color="primary">Reset</Button>
                </TableCell>
                <TableCell>
                    <TextField value={this.state.Title} type="search" onChange={e => this.handleChange(this.props.columns[1], e.target.value)} />
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell>
                    <Autocomplete
                        ref={this.whyWontItClearInputOnReset}
                        autoSelect={true}
                        autoHighlight={true}
                        autoComplete={true}
                        getOptionSelected={(option, value) => option.Name === value.Name}
                        value={this.state.BookGenre}
                        onChange={(e, value) => this.handleChange(this.props.columns[4], value)}
                        options={this.state.BookGenres}
                        getOptionLabel={g => g.Name}
                        renderInput={params => {
                            return (
                                <TextField {...params} label="Genre" fullWidth/>
                            );
                        }}
                    />
                </TableCell>
                <TableCell />
            </TableRow >
        );
    }
}