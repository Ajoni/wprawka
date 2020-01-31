import React from "react";
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Breadcrumb from './../Shared/components/Breadcrumb'
import Borrows from './components/Borrows.jsx'
import BorrowerDetails from './components/BorrowerDetails.jsx'

ReactDOM.render(
    <div>
        <Router>
            <Breadcrumb />
            <Route path='/Home/Borrow' exact component={Borrows}></Route>
            <Route path='/Home/Borrow/Borrower-:id' exact component={BorrowerDetails}></Route>

        </Router>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>,
    document.getElementById("root")
);