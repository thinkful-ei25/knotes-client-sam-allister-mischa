import jwtDecode from 'jwt-decode';
import {API_BASE_URL} from '../config';
import {saveAuthToken, clearAuthToken} from '../local-storage';

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
})

export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
})

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
})

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = userName => ({
  type: AUTH_SUCCESS,
  userName
})

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = (error) => ({
    type: AUTH_ERROR,
    error
});
export const STAY_LOGGEDIN = 'STAY_LOGGEDIN';
export const stayLoggedIn = () => ({
    type: STAY_LOGGEDIN
})
export const LOGOUT_WARNING = 'LOGOUT_WARNING';
export const logoutWarning = () => ({
    type: LOGOUT_WARNING
})

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    decodedToken.user.loggedIn = true;
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
}
export const login = user => dispatch => {
  dispatch(authRequest());
  return (
    fetch((`${API_BASE_URL}/auth/login`), {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
  .then(res => res.json())
  .then(({authToken}) => {
    console.log(authToken)
    storeAuthInfo(authToken, dispatch);
    stayLoggedIn(authToken)
  })
  .catch(err => {
    console.log(err);
    err.message = 
      err  === 401 ? 'Incorrect username or passowrd' : 'Unable to login';
    dispatch(authError(err)); 
  })
  );
}

export const refreshauthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`,{
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then(res => res.json())
  .then(({authToken})=> storeAuthInfo(authToken, dispatch))
  .catch(err => {
    dispatch(authError(err));
    dispatch(clearAuth());
    clearAuthToken();
  })
}

export const logout = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/logout`,{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
  .then((response) => {
    if (response.ok){
      clearAuthToken();
      dispatch(clearAuth());
    }
  })
  .catch(err => dispatch(authError(err)))
}