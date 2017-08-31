import * as _ from 'lodash';

import {
  TOGGLE_LOGIN,
  TOGGLE_SIGNUP,
  TOGGLE_SELECT_GUESTS,
} from '../actions/uiActions';

const initialState = {
  login: false,
  signup: false,
  selectGuests: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return _.merge({}, state, { login: !state.login, signup: false });
    case TOGGLE_SIGNUP:
      return _.merge({}, state, { signup: !state.signup, login: false });
    case TOGGLE_SELECT_GUESTS:
      return _.merge({}, state, { selectGuests: !state.selectGuests });
    default:
      return state;
  }
};

export default uiReducer;