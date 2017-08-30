import axios from 'axios';

export const fetchBookings = venueId => {
  return axios({
    method: 'GET',
    url: `/api/venues/${venueId}/bookings`,
  });
};
