import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

import BookService from '../services/BookService';
import InputField from './InputField';
import DateField from './DateField';
import MySelect from './MySelect';


export default function BookDialog(props) {
    const bookService = new BookService();
    const defaultBook = ({
        BookId: -1,
        Author: '',
        Title: '',
        ReleaseDate: '',
        ISBN: '',
        Count: '',
        AddDate: new Date(),
        ModifiedDate: '',
        BookGenreId: ''
    });
    const [Book, setBook] = React.useState(props.book ? props.book : defaultBook);
    const [BookGenres, setBookGenres] = React.useState([]);
    const [Error, setError] = React.useState(null);

    useEffect(() => {
        async function getBookGeneres() {
            const result = await bookService.getBookGenres();
            setBookGenres(result.map(item => ({ id: item.BookGenreId, display: item.Name })));
        }
        getBookGeneres();
    }, []);

    const clearForm = () => {
        setBook(defaultBook);
        setError(null);
    };
    const handleClose = () => {
        if (props.onClose)
            props.onClose();
        clearForm();
    };
    const handleSubmit = async () => {
        const update = props.book ? true : false;
        const response = update ? await bookService.update(Book) : await bookService.add(Book);
        if (response.ModelState) {
            setError(response.ModelState);
            return;
        }

        if (update) {
            setBook({ ...response });
        }

        if (props.onClose)
            props.onClose();
        if (props.onSubmit)
            props.onSubmit(response);
        if (!update)
            clearForm();
    };

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title" disableBackdropClick={true} disableEscapeKeyDown={true} >
                <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <InputField value={Book.Author} onChange={(event) => setBook({ ...Book, Author: event.target.value })}
                        autoFocus={true}
                        id="Author" label="Author" type="text"
                        required={true}
                        error={Error} />
                    <InputField value={Book.Title} onChange={(event) => setBook({ ...Book, Title: event.target.value })}
                        id="Title" label="Title" type="text" required={true}
                        error={Error} />
                    <DateField id="ReleaseDate" label="ReleaseDate" error={Error} required={false}
                        value={Book.ReleaseDate} onChange={(date) => setBook({ ...Book, ReleaseDate: date })} />
                    <InputField value={Book.ISBN} onChange={(event) => setBook({ ...Book, ISBN: event.target.value })}
                        error={Error} required={true}
                        id="ISBN" label="ISBN" type="text" />
                    <InputField value={Book.Count} onChange={(event) => setBook({ ...Book, Count: event.target.value })}
                        error={Error} required={true}
                        id="Count" label="Count" type="number" />
                    <DateField id="AddDate" label="AddDate"
                        error={Error} required={true}
                        value={Book.AddDate} onChange={(date) => setBook({ ...Book, AddDate: date })} />
                    <DateField id="ModifiedDate" label="ModifiedDate"
                        error={Error} required={false}
                        value={Book.ModifiedDate} onChange={(date) => setBook({ ...Book, ModifiedDate: date })} />
                    <MySelect label="Genre" labelId="labelGenre" id="BookGenreId" required={true}
                        error={Error} 
                        value={Book.BookGenreId} onChange={(value) => setBook({ ...Book, BookGenreId: value.target.value })} items={BookGenres} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        {props.submitText}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}