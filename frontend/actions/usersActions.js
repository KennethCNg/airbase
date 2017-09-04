import * as UsersUtil from '../util/UsersUtil';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};