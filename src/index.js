import React, { Component } from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";


import Header from './components/header';
import { Switch, Route } from "react-router-dom";
// import { Main, Auth, NotFound } from "pages";
import Main from "./components/main"
import Profile from "./components/profile"
import SmartContract from "./components/smartContract"
import 'semantic-ui-css/semantic.min.css';

class App extends React.Component{
    render(){
        return (<>
        <BrowserRouter>
        <Header />
            <Route path="/" exact={true}  component={Main} />
            <Switch>
            <Route path="/profile" exact={false} component={Profile} />
            <Route path="/smartContract"component={SmartContract} />
            </Switch>

        </BrowserRouter>
        </>)
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));