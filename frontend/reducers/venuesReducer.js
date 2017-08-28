import { RECEIVE_VENUES } from '../actions/venuesActions';

const initState = null;

const venuesReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_VENUES:
      return action.venues;
    default:
      return state;
  }
};

export default venuesReducer;