import axios from 'axios';

export const signup = (user) => {
  return axios({
    method: 'POST',
    url: '/api/users',
    data: { user },
  });
};

export const login = (user) => {
  return axios({
    method: 'POST',
    url: '/api/session',
    data: { user },
  });
};

export const logout = () => {
  return axios({
    method: 'DELETE',
    url: '/api/session',
  });
};
