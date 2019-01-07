import { API_BASE_URL } from '../config';
import {normalizeResponseErrors} from './utils'




export const registerUser = user => dispatch => {
    dispatch(registerRequest())
    
    return fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
        
    })
    .then(res => normalizeResponseErrors(res))  
    .then(res => {
            console.log(res)
            res.json()
        })
        .catch(err => {
            
            dispatch(registerError(err))
            throw err
        });
};

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const registerRequest = () => ({
    type: REGISTER_REQUEST
});

export const REGISTER_ERROR = 'REGISTER_ERROR';
export const registerError = error => ({
    type: REGISTER_ERROR,
    error
});

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const registerSuccess = () => ({
    type: REGISTER_SUCCESS
})