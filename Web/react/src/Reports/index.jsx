import React from "react";
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Reports from './components/Reports.jsx'

export class App extends React.Component {
    render() {
        return (
            <div>
                <Reports initialData={this.props.initialData}/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </div>);
    }
}

global.App = App;
global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

