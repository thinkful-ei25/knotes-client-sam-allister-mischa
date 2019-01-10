import React from 'react';
<<<<<<< HEAD

import {connect} from 'react-redux';


export function Progress(props) {
  
  
  return (
    <p>hi</p>
  )
  }
const mapStateToProps = (state) => {
  console.log(state)
  return({
    // loggedIn : state.auth.user ? state.auth.user.loggedIn : null
  })
}

export default connect(mapStateToProps)(Progress);
=======
import {connect} from 'react-redux';
import requiresLogin from './requires_login';
import {fetchProgress} from '../actions/notes';
import {Link} from 'react-router-dom';

class Progress extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(fetchProgress());
  }
  
  render(){
    if(!this.props.progress){
      return null;
    } else {
      return(
        <div>
          {this.props.progress}
        </div>
      );
    }
    
  }
}

const mapStateToProps = state => {
  const {currentUser} = state.auth;
  return {
    username: state.auth.user,
    progress: state.notes.progress
  };
}

export default requiresLogin()(connect(mapStateToProps)(Progress));
>>>>>>> 340e3e66abf8664a89fc2f03e9ca2bb7ec81e74a
