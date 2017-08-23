import * as _ from 'lodash';

import {
  SHOW_LOGIN,
  HIDE_LOGIN,
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
      console.log(`Original display state was ${state.login}`);
      return _.merge({}, state, { login: !state.login });
    case TOGGLE_SIGNUP:
      return _.merge({}, state, { login: !state.signup });
    default:
      return state;
  }
};

export default uiReducer;