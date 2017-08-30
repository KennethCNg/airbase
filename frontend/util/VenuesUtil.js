import axios from 'axios';
import { queryStringFrom } from '../helpers/helpers';

export const fetchVenues = (params) => {
  return axios({
    method: 'GET',
    url: `/api/venues?${queryStringFrom(params)}`,
  });
};

export const fetchVenue = (id) => {
  return axios({
    method: 'GET',
    url: `/api/venues/${id}`,
  });
};

