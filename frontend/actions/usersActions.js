import * as UsersUtil from '../util/UsersUtil';

export const RECEIVE_USERS = 'RECEIVE_USERS';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const fetchUsersByIds = userIds => dispatch => {
  return UsersUtil.fetchUsersByIds(userIds)
  .then(
    res => {
      dispatch(receiveUsers(res.data));
    }
  );
};
