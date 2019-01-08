import React, { Component } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import requiresLogin from './requires_login';
// import { mapStatetoProps } from './components/registration-form';

function Dashboard(props) {
  return(
    <h2>Welcome {props.user ? props.user.username : ''}</h2>
  );
}

const mapStatetoProps = (state) => {
  return(
    {
      loading : state.auth ? state.auth.loading : null,
      authToken : state.auth ? state.auth.authToken : null,
      user : state.auth.user 
    }
  )
}
export default requiresLogin()(connect(mapStatetoProps)(Dashboard));
