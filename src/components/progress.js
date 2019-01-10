import React from 'react';
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
  const {user} = state.auth;
  return {
    username: state.auth.user,
    progress: state.notes.progress
  };
}

export default requiresLogin()(connect(mapStateToProps)(Progress));