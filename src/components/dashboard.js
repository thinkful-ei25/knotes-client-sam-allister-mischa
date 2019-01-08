import React, { Component } from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import requiresLogin from './requires_login';
import Question from './question-answer';
// import { mapStatetoProps } from './components/registration-form';

function Dashboard(props) {
<<<<<<< HEAD

    if(!props.loading && !props.user){
      return <Redirect to="/" />
    }
    return(
     <div>
     <h2>Welcome {props.user ? props.user.username : ''}</h2>
     <Question />
     </div>
    );
=======
  return(
    <h2>Welcome {props.user ? props.user.username : ''}</h2>
  );
>>>>>>> d97d3b09b1e1fa080c07e4257bffad95b1ed1ac4
}

const mapStatetoProps = (state) => {
  return(
    {
      loading : state.auth ? state.auth.loading : null,
      authToken : state.auth ? state.auth.authToken : null,
      user : state.auth.user 
    }
  )
}
export default requiresLogin()(connect(mapStatetoProps)(Dashboard));
