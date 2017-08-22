import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const initialState = {
  session: {
    currentUser: null,
    errors: []
  }  
};

const configureStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
