import { RECEIVE_BOOKINGS, 
  RECEIVE_BOOKINGS_ERRORS,
  RECEIVE_NEW_BOOKING } from '../actions/bookingsActions';
const initState = {};

const bookingsReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_NEW_BOOKING:
      return Object.assign({}, state, { [action.booking.id]: action.booking });
    case RECEIVE_BOOKINGS_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default bookingsReducer;
