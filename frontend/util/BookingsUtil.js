import axios from 'axios';

export const fetchUserBookings = userId => {
  return axios({
    method: 'GET',
    url: `/api/users/${userId}/bookings`,
  });
};

export const fetchBookings = venueId => {
  return axios({
    method: 'GET',
    url: `/api/venues/${venueId}/bookings`,
  });
};

export const postBooking = bookingParams => {
  return axios({
    method: 'POST',
    url: `/api/bookings`,
    data: {
      booking: bookingParams,
    }
  });
};
