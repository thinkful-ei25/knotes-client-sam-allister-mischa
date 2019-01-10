import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import requiresLogin from './requires_login';
import Question from './question-answer';
import Progress from './progress';
import { clearAuth } from '../actions/auth'
import {clearAuthToken} from '../local-storage';
// import { mapStatetoProps } from './components/registration-form';

class Dashboard extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
}

  render() {

    if (!this.props.loading && !this.props.user) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <div>
          <Link onClick={() => this.logOut()} to="/">Log Out</Link>
          <Link to="/dashboard/progress">Progress</Link>
          <Link to="/dashboard">Home</Link>
        </div>
        <div>

          <h2>Welcome {this.props.user ? this.props.user.username : ''}</h2>
          <Route exact path="/dashboard" component={Question} />
          <Route exact path='/dashboard/progress' component={Progress} />
         
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return (
    {
      loading: state.auth ? state.auth.loading : null,
      authToken: state.auth ? state.auth.authToken : null,
      user: state.auth.user
    }
  )
}
export default requiresLogin()(connect(mapStatetoProps)(Dashboard));
