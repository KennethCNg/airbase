import { combineReducers } from 'redux';
import venuesReducer from './venuesReducer';

export default combineReducers({
  venues: venuesReducer,
});