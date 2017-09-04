import { RECEIVE_USERS } from '../actions/usersActions';
const initState = {};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;