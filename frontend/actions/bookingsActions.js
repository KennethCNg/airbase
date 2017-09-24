import * as BookingsUtil from '../util/BookingsUtil';
import * as VenuesUtil from '../util/VenuesUtil';
import * as UsersUtil from '../util/UsersUtil';
import * as _ from 'lodash';
import { receiveVenues } from './venuesActions';
import { receiveUsers } from './usersActions';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKINGS_ERRORS = 'RECEIVE_BOOKINGS_ERRORS';
export const RECEIVE_NEW_BOOKING = 'RECEIVE_NEW_BOOKING';

export const receiveBookings = bookings => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings,
  };
};

export const receiveNewBooking = booking => {
  return {
    type: RECEIVE_NEW_BOOKING,
    booking,
  };
};

export const receiveErrors = errors => {
  return {
      type: RECEIVE_BOOKINGS_ERRORS,
      errors
  };
};

export const fetchBookings = venueId => dispatch => {
  return BookingsUtil.fetchBookings(venueId)
    .then(
      res => {
        dispatch(receiveBookings(res.data));
      }
    );
};

export const fetchUserBookings = userId => dispatch => {
  return BookingsUtil.fetchUserBookings(userId)
    .then( res => {
      dispatch(receiveBookings(res.data));
      const venueIds = Object.values(res.data).map( o => o.venue_id );
      return VenuesUtil.fetchVenues(venueIds);
    })
    .then( res => {
      dispatch(receiveVenues(res.data));
      const userIds = Object.values(res.data).map( v => v.host_id );
      return UsersUtil.fetchUsersByIds(userIds);
    })
    .then( res => {
      dispatch(receiveUsers(res.data));
    });
};

export const postBooking = bookingParams => dispatch => {
  return BookingsUtil.postBooking(bookingParams)
    .then(
      res => {
        dispatch(receiveNewBooking(res.data));
      },
      error => {
        dispatch(receiveErrors(error.response.data));
      }
    );
};