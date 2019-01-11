import React, {Fragment} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Input from './input';
import './login-page.css';

export function Login(props) {
  if (props.loggedIn){
    return <Redirect to="/dashboard"/>
  }
  return (
    <Fragment>
      <div className="login-page">
        <h2 className="title">Login to Knotes!</h2>
        <Input />
        <p><Link to='/register'>Register</Link></p>
        <Link to="/">Back to landing page</Link>
      </div>
    </Fragment>
// two input fields --> username, password
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return({
    loggedIn : state.auth.user ? state.auth.user.loggedIn : null
  })
}

export default connect(mapStateToProps)(Login);