import * as _ from 'lodash';

import {
  TOGGLE_LOGIN,
  TOGGLE_SIGNUP,
} from '../actions/uiActions';

const initialState = {
  login: false,
  signup: false,
  selectGuests: true,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return _.merge({}, state, { login: !state.login, signup: false });
    case TOGGLE_SIGNUP:
      return _.merge({}, state, { signup: !state.signup, login: false });
    default:
      return state;
  }
};

export default uiReducer;