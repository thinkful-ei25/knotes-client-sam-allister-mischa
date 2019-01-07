import React, { Component } from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';
import RegistrationPage from './components/registration-page'
import {Login} from './components/login-page'

import './App.css';

class App extends Component {
  render() {
    return (
     
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path="/register" component={RegistrationPage} />
      </Switch>
    );
  }
}

export default withRouter(App);
