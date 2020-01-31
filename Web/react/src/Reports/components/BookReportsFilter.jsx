import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateField from './../../Shared/components/Inputs/DateField.js';

import BookService from './../../Book/services/BookService.js';

const Date_MIN_VALUE = new Date(0);
const Date_MAX_VALUE = new Date(28640000000000);

const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

export default class BookReportsFilter extends React.Component {
    constructor(props) {
        super(props);
        this.bookService = new BookService();
        this.state = {
            Filter: {
                Title: '',
                BookGenreId: -1,
                FromDate: null,
                ToDate: null
            },
            DefaultFilter: {
                Title: '',
                BookGenreId: -1,
                FromDate: Date_MIN_VALUE,
                ToDate: Date_MAX_VALUE
            },
            BookGenres: [],
            BookGenre: ''
        }
        this.onFilterChanged = debounce(this.props.onFilterChanged, 500);
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

    filterChange(name, value) {
        const Filter = { ...this.state.Filter };
        Filter[name] = value;
        this.setState({ Filter });

        const filter = { ...Filter };
        Object.keys(Filter).forEach(key => {
            if (filter[key] === null)
                filter[key] = this.state.DefaultFilter[key];
        });
        return filter;
    }

    titleChange(value) {
        this.onFilterChanged(this.filterChange('Title', value));
    }
    genreChange(value) {
        this.onFilterChanged(this.filterChange('BookGenreId', value));
    }
    fromDateChange(value) {
        if (!isNaN(value.valueOf()))
            this.onFilterChanged(this.filterChange('FromDate', value));
    }
    toDateChange(value) {
        if (!isNaN(value.valueOf()))
            this.onFilterChanged(this.filterChange('ToDate', value));
    }

    reset() {
        this.setState({
            Filter: {
                Title: '',
                BookGenreId: -1,
                FromDate: null,
                ToDate: null
            },
            BookGenre: ''
        });
        this.onFilterChanged(this.state.DefaultFilter);
    }

    render() {
        return (
            <Paper>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            <TextField value={this.state.Filter.Title} label="Title" name="Title" type="search" onChange={e => this.titleChange(e.target.value)} />
                        </Grid>
                        <Grid item xs={4}>
                            <Autocomplete
                                name="BookGenreId"
                                disableClearable={true}
                                value={this.state.BookGenre}
                                getOptionSelected={(option, value) => {
                                    return option.BookGenreId === value.BookGenreId;
                                }}
                                onChange={(e, value) => {
                                    this.genreChange(value.BookGenreId);
                                    this.setState({ BookGenre: value });
                                }}
                                options={this.state.BookGenres}
                                getOptionLabel={g => g === '' ? '' : g.Name}
                                renderInput={params => {
                                    return (
                                        <TextField {...params} label="Genre" fullWidth />
                                    );
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            <DateField id="FromDate" label="FromDate" name="FromDate"
                                value={this.state.Filter.FromDate} onChange={date => this.fromDateChange(date)} />
                        </Grid>
                        <Grid item xs={4}>
                            <DateField id="ToDate" label="ToDate" name="ToDate"
                                value={this.state.Filter.ToDate} onChange={date => this.toDateChange(date)} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4}>
                            <Button onClick={() => this.reset()} variant="outlined" color="primary">Reset</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}