import React, { useState, useEffect } from 'react';

import BookService from '../services/BookService';
import BooksTable from './BooksTable.jsx';
import BorrowsTable from './BorrowsTable.jsx';
import BorrowsHistoryTable from './BorrowsHistoryTable.jsx';


export default function BookDetails(props) {
    const bookService = new BookService();
    const [Book, setBook] = React.useState([]);
    const [Borrows, setBorrows] = React.useState([]);
    const [BorrowsHistory, setBorrowsHistory] = React.useState([]);

    useEffect(() => {
        async function getDetails() {
            const result = await bookService.getBookDetails(props.match.params.id);
            setBook([result.Book]);
            setBorrows(result.Borrow);
            setBorrowsHistory(result.BorrowHistory);
        }
        getDetails();
    }, []);

    return (
        <div>
            <BooksTable rows={Book} pageSize={1} paging={false} title="Selected book"/>
            <BorrowsTable rows={Borrows} />
            <BorrowsHistoryTable rows={BorrowsHistory} />
        </div>
    );
}