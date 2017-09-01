import * as BookingsUtil from '../util/BookingsUtil';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKINGS_ERRORS = 'RECEIVE_BOOKINGS_ERRORS';

export const receiveBookings = bookings => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings,
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

export const postBooking = bookingParams => dispatch => {
  return BookingsUtil.postBooking(bookingParams)
    .then(
      res => {
        dispatch(receiveBookings(res.data));
      },
      error => {
        dispatch(receiveErrors(error.response.data));
      }
    );
};