import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/auth';
import './input.css';
export class Input extends Component {

  onSubmit(e) {
    e.preventDefault();
    this.props.login({username: this.username.value, password: this.password.value});
  };

  render(){
    return (
      <Fragment>
        <form className="login-form" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="username-login">Username: </label>
          <input id="username-login" aria-label="input"  className="userAuthInput" type="text" placeholder="enter username" ref={input => this.username = input}/><br/>
          <label htmlFor="password-login">Password: </label>
          <input id="password-login"aria-label="input" className="userAuthInput" type="password" placeholder="enter password" ref={input => this.password = input}/><br/>
          <button id="submit-login" className="login-btn btn" type="submit">Login</button>
        </form>
        <div className="login-err">
          {this.props.error ? this.props.error: ""}
        </div>
        
      </Fragment>
// two input fields --> username, password
    )
  }
}

const mapDispatchToProps = {
  login
}

const mapStateToProps = (state) => {
  return ({
    error: state.auth.error,
})}

export default connect(mapStateToProps, mapDispatchToProps)(Input)