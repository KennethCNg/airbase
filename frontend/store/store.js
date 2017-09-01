import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const initialState = {
  session: {
    currentUser: null,
    errors: []
  }  
};

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const logger = require('redux-logger');
  middlewares.push(logger.createLogger());
}

const configureStore = (preloadedState = initialState) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
