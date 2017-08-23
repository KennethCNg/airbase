import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import uiReducer from './uiReducer';

export default combineReducers({
  session: sessionReducer,
  ui: uiReducer,
});
