import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
import RegistrationForm from './registration-form';
import './registration-page.css';

export function RegistrationPage(props) {
    
    if (props.registered) {
        return <Redirect to="/login"></Redirect>
    }
    
    
    return (
        <div  className="container registration-container">
            <h1>Register for Note Shark</h1>
            <RegistrationForm />
            <Link to="/login" className="btn2">Log In</Link><br/>
            <Link to="/" className="btn2">Back to landing page</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    registered: state.register.registered,
    
    });

export default connect(mapStateToProps)(RegistrationPage);