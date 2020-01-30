import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

import BorrowService from '../services/BorrowService';
import SelectField from './../../Shared/components/Inputs/SelectField';


export default class BorrowDialog extends React.Component {
    constructor(props) {
        super(props);
        this.borrowService = new BorrowService();
        this.state = { users: [], availableBooks: [], selected: [], selectedUserId: null };
    }

    componentDidMount() {
        this.borrowService.getUsers().then(response => this.setState({
            users: response.map(item => ({ id: item.UserId, display: item.UserName }))
        }));
    }

    clearForm = () => {
        this.setState({ availableBooks: [], selected: [], selectedUserId: null });
    };
    handleClose = () => {
        if (this.props.onClose)
            this.props.onClose();
        this.clearForm();
    };
    handleSubmit = async () => {
        const borrowVM = {
            BookIds: this.state.selected.map(s => (s.id)),
            UserId: this.state.selectedUserId
        };
        const response = await this.borrowService.borrowBooks(borrowVM);

        if (this.props.onClose)
            this.props.onClose();
        this.clearForm();
    };

    onUserChange = async (value) => {
        const selectedUserId = value.target.value;
        if (selectedUserId === this.state.selectedUserId)
            return;

        var availableBooks = await this.borrowService.getAvailableBooks(selectedUserId);
        availableBooks = availableBooks.map(item => ({ id: item.BookId, display: item.Title, isChosen: false }));

        this.setState({
            selectedUserId,
            availableBooks,
            selected: [null]
        });
    }

    onBookChange = (value, index) => {
        const prevValue = this.state.selected[index];
        const selectedBook = value.target.value;
        if (prevValue && prevValue.id === selectedBook.id)
            return;

        if (prevValue)
            prevValue.isChosen = false;

        const availableBooks = [...this.state.availableBooks];
        const selected = [...this.state.selected];

        availableBooks[this.state.availableBooks.indexOf(selectedBook)].isChosen = true;
        selected[index] = selectedBook;

        this.setState({
            availableBooks,
            selected
        });
    }

    addNextBook() {
        var selected = [...this.state.selected];
        selected.push(null);
        this.setState({
            selected
        });
    }

    removeBook(index) {
        const selected = [...this.state.selected];
        selected.splice(index);

        this.setState({
            selected
        });
    }

    renderBookSelects() {
        const selects =
            this.state.selected.map((item, i) => {
                return (
                    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                        <FormControl fullWidth>
                            <InputLabel id={`Book${i}`}>
                                {`Book${i + 1}`}
                            </InputLabel>
                            <Select labelId={`Book${i}`} id={`Book${i}`}
                                value={item}
                                onChange={(value) => this.onBookChange(value, i)}>
                                {this.state.availableBooks.map((selectItem, j) => (
                                    selectItem.isChosen && selectItem !== item ? null :
                                        <MenuItem key={j} tabIndex={j} value={selectItem}>{selectItem.display}</MenuItem>
                                )
                                )}
                            </Select>
                        </FormControl>
                        {i > 0 && <Button onClick={() => this.removeBook(i)}>Remove</Button>}
                    </Grid>);
            }
            )

        return (<div>{selects}</div>);
    }

    render() {
        const canAdd = this.state.availableBooks.length > this.state.selected.length;
        const canSubmit = this.state.selected.length > 0 && this.state.selected.filter(s => s === null).length === 0;
        return (
            <div>
                <Dialog open={this.props.open} onClose={this.handleClose} aria-labelledby="form-dialog-title" disableBackdropClick={true} disableEscapeKeyDown={true} >
                    <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent>
                        <SelectField label="User" labelId="labelUser" id="UserId" required={true}
                            items={this.state.users} onChange={this.onUserChange}
                            value={this.state.selectedUserId} />
                        {this.renderBookSelects()}
                        <Button disabled={!canAdd} onClick={() => this.addNextBook()} color="primary">Add next</Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button disabled={!canSubmit} onClick={this.handleSubmit} color="primary">Borrow</Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}