import axios from 'axios';
import { queryStringFromArr } from '../helpers/helpers';

export const fetchUsersByIds = (userIds) => {
  const query = queryStringFromArr(userIds, 'user_ids');
  return axios({
    method: 'GET',
    url: `/api/users?${query}`,
  });
};