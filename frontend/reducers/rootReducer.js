import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import uiReducer from './uiReducer';
import entitiesReducer from './entitiesReducer';

export default combineReducers({
  session: sessionReducer,
  ui: uiReducer,
  entities: entitiesReducer,
});
