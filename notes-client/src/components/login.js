import React from 'react';
import { connect } from 'react-redux';




export function Login(props) {
    

    
    return (
        <div>
            <p>hi</p>
        </div>
    );
}

const mapStateToProps = state => ({
    // loggedIn: state.auth.currentUser !== null,
    });

export default connect(mapStateToProps)(Login);