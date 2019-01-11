import React, {Fragment} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Input from './input';

export function Login(props) {
  if (props.loggedIn){
    return <Redirect to="/dashboard"/>
  }
  return (
    <Fragment>
      <h2>Login to Knotes!</h2>
      <Input />
      <p><Link to='/register'>Register</Link></p>
      <Link to="/">Back to landing page</Link>
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