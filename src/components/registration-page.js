import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    
    if (props.registered) {
        return <Redirect to="/login"></Redirect>
    }
    
    return (
        <div>
            <h2>Register</h2>
            <RegistrationForm />
            
        </div>
    );
}

const mapStateToProps = state => ({
    registered: state.register.registered
    });

export default connect(mapStateToProps)(RegistrationPage);