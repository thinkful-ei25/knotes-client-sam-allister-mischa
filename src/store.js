import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/auth-reducer';
import registrationReducer from './reducers/register';
import {loadAuthToken} from './local-storage'
import thunk from 'redux-thunk';
import { setAuthToken, refreshauthToken } from './actions/auth';
const store = createStore(
  combineReducers({
    auth: authReducer,
    register: registrationReducer
  }), applyMiddleware(thunk));

const authToken = loadAuthToken();
if(authToken){
  store.dispatch(setAuthToken(authToken));
  store.dispatch(refreshauthToken(authToken));
}
export default store;