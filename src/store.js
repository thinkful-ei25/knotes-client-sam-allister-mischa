import {createStore, combineReducers, applyMiddleware} from 'redux';
import authReducer from './reducers/auth-reducer'
// import loginReducer 
// import registrationReducer
import thunk from 'redux-thunk';
const store = createStore(
  combineReducers({
    auth: authReducer
  }), applyMiddleware(thunk));

export default store;