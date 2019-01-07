import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {authRequest} from '../actions/auth'
export class Input extends Component {
  onSubmit(e) {
    e.preventDefault();
    this.props.login({username: this.username, password: this.password});
  };

  render(){
    console.log(this.props)
    return (
      <Fragment>
        <form onSubmit={e => this.onSubmit(e)}>
          <input aria-label="input" className="userAuthInput" type="text" placeholder="enter username" ref={input => this.username = input}/>
          <input aria-label="input" className="userAuthInput" type="password" placeholder="enter password" ref={input => this.password = input}/>
          <button type="submit">Login</button>
        </form>
        {this.props.error ? <div>{this.props.error}</div> : null}
      </Fragment>
// two input fields --> username, password
    )
  }
}

const mapDispatchToProps = {
  login: authRequest
}

const mapStateToProps = (state) => {
  return ({
    error: state.auth.error
})}

export default connect(mapStateToProps, mapDispatchToProps)(Input)