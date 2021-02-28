import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {authTokenReducer} from './authTokenReducer';

export default combineReducers({
  auth: authReducer,
  authToken: authTokenReducer,
});
