import axios from 'axios';

export const getVenues = () => {
  return axios({
    method: 'GET',
    url: '/api/venues',
  });
};

