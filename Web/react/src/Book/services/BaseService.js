export default class BaseService {
    constructor() {
        this.domain = 'https://localhost:44375';
        this.fetch = this.fetch.bind(this);
    }

    fetch(url, options) {
        const headers = {
            'Content-Type': 'application/json'
        }

        return fetch(`${this.domain}/${url}`,
            {
                headers,
                ...options
            });
        //.then(this._checkStatus);
    }

    _checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            const error = new Error(response.statusText);
            error.response = response;
            throw response;
        }
    }
}