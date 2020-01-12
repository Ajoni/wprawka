import React, { useState, useEffect } from 'react';

import BookService from '../services/BookService';
import BooksTable from './BooksTable';
import BorrowsTable from './BorrowsTable';
import BorrowsHistoryTable from './BorrowsHistoryTable';


export default function BookDetails(props) {
    const bookService = new BookService();
    const [Book, setBook] = React.useState([]);
    const [Borrows, setBorrows] = React.useState([]);
    const [BorrowsHistory, setBorrowsHistory] = React.useState([]);

    useEffect(() => {
        async function getDetails() {
            const result = await bookService.getBookDetails(props.match.params.id);
            setBook([result.Book]);
            setBorrows(result.BorrowedBooks);
            setBorrowsHistory(result.BorrowedBooksHistory);
        }
        getDetails();
    }, []);

    return (
        <div>
            <h3>Book</h3>
            <BooksTable rows={Book} />
            <h3>Borrowed by</h3>
            <BorrowsTable rows={Borrows} />
            <h3>Borrow history</h3>
            <BorrowsHistoryTable rows={BorrowsHistory} />
        </div>
    );
}