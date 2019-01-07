import {createStore, combineReducers, applyMiddleware} from 'redux';
// import reducers authReducer
// import loginReducer 
// import registrationReducer
import thunk from 'redux-thunk';
const store = createStore(
  combineReducers({
    // auth: authReducer
  }), applyMiddleware(thunk));

export default store;