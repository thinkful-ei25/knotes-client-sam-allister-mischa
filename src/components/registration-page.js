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
            <h2>Welcome to Knotes</h2>
            <p>Knotes is an app to learn music notes. Look at the note and type the correct answer. </p>
            <p>If the answer is correct, you will receive points. </p>
            <p>If the answer is incorrect, you will be shown the correct answer.</p>
            <p>After reviewing your feedback, click next to move on to the next note.</p>
            <p>Register to begin. After registration, you will be taken to the login page</p>
            <RegistrationForm />
            
        </div>
    );
}

const mapStateToProps = state => ({
    registered: state.register.registered
    });

export default connect(mapStateToProps)(RegistrationPage);