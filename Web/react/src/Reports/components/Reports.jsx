import React, { Component } from "react";
import BookReportsFilter from "./BookReportsFilter.jsx";
import BookReportsTable from "./BookReportsTable.jsx";
import UserReportsTable from "./UserReportsTable.jsx";


const Date_MIN_VALUE = new Date(0);
const Date_MAX_VALUE = new Date(28640000000000);

class Reports extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Filter: {
                Title: '',
                BookGenreId: -1,
                FromDate: Date_MIN_VALUE,
                ToDate: Date_MAX_VALUE
            }
        };
    }

    render() {

        return (<div>
            <BookReportsFilter onFilterChanged={(Filter) => this.setState({Filter})} />
            <BookReportsTable initialData={this.props.initialData.BookReports} filter={this.state.Filter} />
            <UserReportsTable initialData={this.props.initialData.UserReports} />
        </div>
        );
    }
}

export default Reports;