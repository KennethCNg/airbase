import { 
  RECEIVE_ERRORS, 
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
} from '../actions/sessionActions';

const initialState = {
    currentUser: null,
    errors: [],
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser.data });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      // use assign instead of _.merge because we want a shallow merge.
      // deep merge will cause errors to concatenate.
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default sessionReducer;
