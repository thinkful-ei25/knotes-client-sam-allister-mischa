import {createStore, combineReducers, applyMiddleware} from 'redux';
// import reducers authReducer
// import loginReducer 
import registrationReducer from './reducers/register'
import thunk from 'redux-thunk';
const store = createStore(
  combineReducers({
    register: registrationReducer
  }), applyMiddleware(thunk));

export default store;