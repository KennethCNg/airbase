import { combineReducers } from 'redux';
import venuesReducer from './venuesReducer';
import bookingsReducer from './bookingsReducer';
import reviewsReducer from './reviewsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  venues: venuesReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer,
  users: usersReducer,
});