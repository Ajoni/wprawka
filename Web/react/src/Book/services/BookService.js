import BaseService from './../../Shared/services/BaseService.js';


export default class BookService extends BaseService {

    getAll() {
        return this.fetch(`book/all`, null)
            .then(res => res.json());
    }

    add(book) {
        let body = "";

        body = JSON.stringify(book);

        return this.fetch(`/book/add`, {
            method: 'post',
            body
        }).then(res => res.json());;
    }

    update(book) {
        let body = "";

        body = JSON.stringify(book);

        return this.fetch(`/book/update`, {
            method: 'post',
            body
        }).then(res => res.json());
    }

    getBookGenres() {
        return this.fetch(`book/genres`, null)
            .then(res => res.json());
    }

    getBookDetails(id) {
        return this.fetch(`book/${id}`, null)
            .then(res => res.json());
    }
}
