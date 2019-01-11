import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import requiresLogin from './requires_login';
import Question from './question-answer';
import Progress from './progress';
import { clearAuth } from '../actions/auth'
import {clearAuthToken} from '../local-storage';
import './dashboard.css';
// import PlaySounds from './playSound';
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
        {/* <PlaySounds /> */}
        <nav className="nav">
          <ul className="navbar">
            <li className="nav-item item-3">
              <Link onClick={() => this.logOut()} to="/" className="nav-link">Log Out</Link>
            </li>
            <li className="nav-item item-2">
              <Link to="/dashboard/progress" className="nav-link">Progress</Link>
            </li>
            <li className="nav-item item-1">
              <Link to="/dashboard" className="nav-link">Home</Link>
            </li>
          </ul>
        </nav>
        <div>

          <h2 className="greeting">Welcome {this.props.user ? this.props.user.username : ''}</h2>
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
