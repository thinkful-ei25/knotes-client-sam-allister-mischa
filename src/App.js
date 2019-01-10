import React, { Component } from 'react';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import RegistrationPage from './components/registration-page'
import {connect} from 'react-redux';
import Login from './components/login-page';
import Dashboard from './components/dashboard';

import './App.css';
// import { mapStatetoProps } from './components/registration-form';

class App extends Component {
  render() {
    console.log(this.props)
    return(
     
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/login' component={Login}/>
        <Route exact path="/" component={RegistrationPage} />
      </Switch>
    );
  }
}
const mapStatetoProps = (state) => {
  return({
    user : state.auth.user 
})}
export default withRouter(connect(mapStatetoProps)(App));
