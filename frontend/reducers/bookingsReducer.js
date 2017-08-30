import { RECEIVE_BOOKINGS } from '../actions/bookingsActions';
const initState = {};

const bookingsReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    default:
      return state;
  }
};

export default bookingsReducer;
