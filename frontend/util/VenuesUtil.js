import axios from 'axios';

export const fetchVenues = () => {
  return axios({
    method: 'GET',
    url: '/api/venues',
  });
};

export const fetchVenue = (id) => {
  return axios({
    method: 'GET',
    url: `/api/venues/${id}`,
  });
};

