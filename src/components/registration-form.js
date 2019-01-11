import React from 'react';
import { connect } from 'react-redux';
import { registerUser, registerSuccess, registerError } from '../actions/register'


export function RegistrationForm(props) {
    let nameInput;
    let usernameInput;
    let passwordInput;

    const handleSubmit = (e) => {
        e.preventDefault()
        let name = nameInput.value
        let username = usernameInput.value;
        let password = passwordInput.value;
        let user = { name, username, password }
        return props.dispatch(registerUser(user))
            .then(() => {
                props.dispatch(registerSuccess())
            })
            .catch(err => props.dispatch(registerError(err)))
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name: </label>
            <input ref={input => (nameInput = input)} type="text" id="name" name="name"></input><br/>
            <label htmlFor="username">Username: </label>
            <input ref={input => (usernameInput = input)} type="text" id="username" name="username"></input><br/>
            <label htmlFor="password">Password: </label>
            <input ref={input => (passwordInput = input)} type="password" id="password" name="password"></input><br/>
            <button type="submit" className="reg-btn">
                Register
            </button>
            <p>{props.error ? props.error.message : ''}</p>

        </form >
    )
}

export const mapStatetoProps = (state) => {
    return {
        error: state.register.error
    }
}

export default connect(mapStatetoProps)(RegistrationForm);