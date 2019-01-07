import React, { Component } from 'react';
import RegistrationPage from './components/registration-page'
import './App.css';
import Login from './components/login'
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
                <Route path="/login" component={Login} />
                <Route exact path="/register" component={RegistrationPage} />
      </div>
    );
  }
}

export default App;
