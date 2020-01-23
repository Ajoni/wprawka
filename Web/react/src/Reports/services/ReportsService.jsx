import BaseService from './../../Shared/services/BaseService.js';


export default class ReportsService extends BaseService {

    getTopBooks(vm) {
        let body = "";

        body = JSON.stringify(vm);
        return this.fetch(`reports/topBooks/`,
                {
                    method: 'post',
                    body
                })
            .then(res => res.json());
    }

    getTopUsers(vm) {
        let body = "";

        body = JSON.stringify(vm);
        return this.fetch(`reports/topUsers/`,
            {
                method: 'post',
                body
            })
            .then(res => res.json());
    }

}