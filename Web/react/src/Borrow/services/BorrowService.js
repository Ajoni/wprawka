import BaseService from './../../Shared/services/BaseService.js';


export default class BorrowService extends BaseService {

    getBorrowedBooks() {
        return this.fetch(`borrow/borrowed`, null)
            .then(res => res.json());
    }

    borrowBooks(books) {
        let body = "";

        body = JSON.stringify(books);

        return this.fetch(`borrow/`,
            {
                method: 'post',
                body
            })
            .then(res => res.json());
    }

    returnBooks(books) {
        let body = "";

        body = JSON.stringify(books);

        return this.fetch(`borrow/return`,
            {
                method: 'post',
                body
            });
    }

    getBorrowers() {
        return this.fetch(`borrow/borrowers`, null)
            .then(res => res.json());
    }

    getBorrowerDetails(id) {
        return this.fetch(`borrow/borrower/${id}`, null)
            .then(res => res.json());
    }

    getUsers() {
        return this.fetch(`borrow/users`, null)
            .then(res => res.json());
    }

    getAvailableBooks(userId) {
        return this.fetch(`borrow/available/${userId}`, null)
            .then(res => res.json());
    }

}
