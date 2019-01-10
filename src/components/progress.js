import React from 'react';

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