import { combineReducers } from 'redux';
import venuesReducer from './venuesReducer';
import bookingsReducer from './bookingsReducer';

export default combineReducers({
  venues: venuesReducer,
  bookings: bookingsReducer,
});