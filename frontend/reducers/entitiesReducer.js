import { combineReducers } from 'redux';
import venuesReducer from './venuesReducer';
import bookingsReducer from './bookingsReducer';
import reviewsReducer from './reviewsReducer';

export default combineReducers({
  venues: venuesReducer,
  bookings: bookingsReducer,
  reviews: reviewsReducer,
});