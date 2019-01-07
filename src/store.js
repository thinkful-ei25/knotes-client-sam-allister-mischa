import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/auth-reducer'
import registrationReducer from './reducers/register'
// import loginReducer 
// import registrationReducer
import thunk from 'redux-thunk';
const store = createStore(
  combineReducers({
    auth: authReducer,
    register: registrationReducer
  }), applyMiddleware(thunk));

export default store;