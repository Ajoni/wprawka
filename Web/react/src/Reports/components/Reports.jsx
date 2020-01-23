import React, { Component } from "react";
import BookReportsTable from "./BookReportsTable.jsx";
import UserReportsTable from "./UserReportsTable.jsx";

class Reports extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (<div>
            <BookReportsTable initialData={this.props.initialData.BookReports}/>
            <UserReportsTable initialData={this.props.initialData.UserReports}/>
            </div>
        );
    }
}

export default Reports;