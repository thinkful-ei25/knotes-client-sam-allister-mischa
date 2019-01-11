import React from 'react';
import { connect } from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
import './landing-page.css';




export function LandingPage(props) {
    
    return (
        <div className="landing-container">
            <h2 className="title">Welcome to Knotes</h2>
            <p>
                Knotes is an app to learn music notes. 
                Look at the note and type the correct answer.
                If the answer is correct, you will receive points. 
                If the answer is incorrect, you will be shown the correct answer.
                After reviewing your feedback, click next to move on to the next note.
                Register to begin or login now!
            </p>
            <div className="lp-btn-container">
               <Link to="/register" className="btn register">Register</Link>
               <Link to="/login" className="btn login">Log In</Link>
            </div>
            <div className="lp-img-container">
               <img src="https://i.imgur.com/rMsGafK.gif" alt="dancing shark gif"/>
            </div>
        </div>
    );
}

export default connect()(LandingPage);