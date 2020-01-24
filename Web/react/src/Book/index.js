import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Books from './components/Books.jsx';
import BookDetails from './components/BookDetails.jsx';
import Breadcrumb from './components/Breadcrumb.js';



ReactDOM.render(
    <div>
        <Router>
            <Breadcrumb/>
            <Route path='/Home/Books' exact component={Books}></Route>
            <Route path='/Home/Books/:id' exact component={BookDetails}></Route>

        </Router>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </div>,
    document.getElementById("root")
);