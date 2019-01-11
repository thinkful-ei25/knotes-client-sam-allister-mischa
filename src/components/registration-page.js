import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    
    if (props.registered) {
        return <Redirect to="/login"></Redirect>
    }
    
    
    return (
        <div>
            <h2>Register for Note Shark</h2>
            <RegistrationForm />
            <p>Already registered? <Link to="/login">Log In</Link></p>
            <Link to="/">Back to landing page</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    registered: state.register.registered,
    
    });

export default connect(mapStateToProps)(RegistrationPage);