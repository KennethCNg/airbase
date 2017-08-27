import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import uiReducer from './uiReducer';
import venueReducer from './venueReducer';

export default combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  venues: venueReducer,
});
