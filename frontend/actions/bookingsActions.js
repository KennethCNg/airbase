import * as BookingsUtil from '../util/BookingsUtil';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';

export const receiveBookings = bookings => {
  return {
    type: RECEIVE_BOOKINGS,
    bookings,
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
