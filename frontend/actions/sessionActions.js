import * as SessionApiUtil from '../util/SessionApiUtil';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
      type: RECEIVE_ERRORS,
      errors
  };
};

export const clearErrors = () => {
  return {
      type: CLEAR_ERRORS,
  };
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
    .then(
      u => {
        dispatch(clearErrors());
        dispatch(receiveCurrentUser(u));
      }
    );
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
    .then(
      u => { 
        dispatch(clearErrors());
        dispatch(receiveCurrentUser(u));
      },
      res => dispatch(receiveErrors(res.responseJSON))
    );
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)));
};

