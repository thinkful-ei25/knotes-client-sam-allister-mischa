import React, { Component } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

// import { mapStatetoProps } from './components/registration-form';

class Dashboard extends Component {
  render() {
    console.log(this.props.user)
    return(
     <h2>Welcome {this.props.user ? this.props.user.name : 'null'}</h2>
    );
  }
}
const mapStatetoProps = (state) => {
  console.log(state);
  return(
    {
    user : state.auth ? state.auth.user : null
    }
  )
}
export default withRouter(connect(mapStatetoProps)(Dashboard));
