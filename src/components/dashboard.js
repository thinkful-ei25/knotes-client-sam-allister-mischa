import React, { Component } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import requiresLogin from './requires_login';
// import { mapStatetoProps } from './components/registration-form';

function Dashboard(props) {

    if(!props.loading && !props.user){
      return <Redirect to="/" />
    }
    return(
     <h2>Welcome {props.user ? props.user.username : ''}</h2>
    );
}

const mapStatetoProps = (state) => {
  return(
    {
      loading : state.auth ? state.auth.loading : null,
      user : state.auth.user 
    }
  )
}
export default requiresLogin()(connect(mapStatetoProps)(Dashboard));
