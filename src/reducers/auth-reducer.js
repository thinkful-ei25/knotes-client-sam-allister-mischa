import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  STAY_LOGGEDIN,
} from '../actions/auth';

const initialState = {
  authToken: null,
  user: null,
  loading: false,
  error: null
}

export default function reducer(state = initialState, action){
  switch(action.type){
    
    case AUTH_REQUEST:
      return {...state, loading: true}
    
    case SET_AUTH_TOKEN:
      return {...state, loading: false, authToken: action.authToken}
    case AUTH_SUCCESS:
      return {...state, loading: false, user: action.userName}
    
    case CLEAR_AUTH:
      return {...state, loading: false, authToken: null, user: null}
    
    case AUTH_ERROR:
      return {...state, loading: false, error: action.error}
    
    case STAY_LOGGEDIN:
      return {...state, loading: false, authToken: action.authToken}

    default:
      return state;
  }
}