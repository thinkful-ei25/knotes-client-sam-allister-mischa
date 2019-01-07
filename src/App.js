import React, { Component } from 'react';
import {Route, withRouter, Switch} from 'react-router-dom';

import {Login} from './components/login-page'

import './App.css';

class App extends Component {
  render() {
    return (
     
      <Switch>
        <Route exact path='/login' component={Login}/>
      </Switch>
    );
  }
}

export default withRouter(App);
