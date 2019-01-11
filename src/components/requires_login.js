import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
export default () => Component => {
    function RequiresLogin(props) {
      const {authenticating, authToken, error, ...passThroughProps} = props;
        // console.log(user)  
        if (authenticating) {
            return <div>Logging in...</div>;
        } else if (!authToken || error) {
            return <Redirect to="/" />;
        }
        return <Component {...passThroughProps} />;
    }
    const displayName = Component.displayName || Component.name || 'Component';
    RequiresLogin.displayName = `RequiresLogin(${displayName})`;
    const mapStateToProps = (state, props) => {
      return({
        authenticating: state.auth.loading,
        authToken : state.auth.authToken,
        // user: state.auth.user !== null,
        error: state.auth.error
    })};
    return connect(mapStateToProps)(RequiresLogin);
};