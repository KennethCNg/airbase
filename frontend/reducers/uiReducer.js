import * as _ from 'lodash';

import {
  HIDE_AUTH_MODALS,
  TOGGLE_LOGIN,
  TOGGLE_SIGNUP,
} from '../actions/uiActions';

const initialState = {
  login: false,
  signup: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return _.merge({}, state, { login: !state.login });
    case TOGGLE_SIGNUP:
      return _.merge({}, state, { signup: !state.signup });
    case HIDE_AUTH_MODALS:
      return _.merge({}, state, { signup: false, login: false });
    default:
      return state;
  }
};

export default uiReducer;