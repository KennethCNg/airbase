import axios from 'axios';
import { queryStringFrom, queryStringFromArr } from '../helpers/helpers';

export const fetchVenues = (params) => {
  const query = Array.isArray(params) ? 
  queryStringFromArr(params, 'id') : queryStringFrom(params);
  return axios({
    method: 'GET',
    url: `/api/venues?${query}`,
  });
};

export const fetchVenue = (id) => {
  return axios({
    method: 'GET',
    url: `/api/venues/${id}`,
  });
};

