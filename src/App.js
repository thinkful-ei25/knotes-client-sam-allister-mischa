import React, { Component } from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import RegistrationPage from './components/registration-page'
import {connect} from 'react-redux';
import Login from './components/login-page';
import Dashboard from './components/dashboard';
import Progress from './components/progress';
import LandingPage from './components/landing-page';

import './App.css';
// import { mapStatetoProps } from './components/registration-form';

class App extends Component {
  render() {
    return(
     
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/login' component={Login}/>
        <Route exact path="/register" component={RegistrationPage} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path='/progress' component={Progress} />
      </Switch>
    );
  }
}
const mapStatetoProps = (state) => {
  return({
    user : state.auth.user 
})}
export default withRouter(connect(mapStatetoProps)(App));
