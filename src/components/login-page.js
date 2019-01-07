import React, {Fragment, Component} from 'react';
import Input from './input'

export class Login extends Component {

  render(){
    return (
      <Fragment>
        <h2>Login to Knotes!</h2>
        <Input />
      </Fragment>
// two input fields --> username, password
    )
  }
}