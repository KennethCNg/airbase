import * as _ from 'lodash';
import { 
  RECEIVE_ERRORS, 
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS,
} from '../actions/sessionActions';
import { 
  RECEIVE_NEW_BOOKING,
} from '../actions/bookingsActions';

const initialState = {
    currentUser: null,
    errors: [],
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.currentUser) {
        return Object.assign({}, state, { currentUser: action.currentUser.data });
      } else {
        return Object.assign({}, state, { currentUser: null });
      }
    case RECEIVE_NEW_BOOKING:
      const currentUser = Object.assign({}, state.currentUser );
      currentUser.bookings.push(action.booking);
      return Object.assign({}, state, { currentUser });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: [] });
    default:
      return state;
  }
};

export default sessionReducer;
