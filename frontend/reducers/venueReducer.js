import { RECEIVE_VENUES } from '../actions/venueActions';

const initState = {};

const venueReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_VENUES:
      // debugger;
      return action.venues;
    default:
      return state;
  }
};

export default venueReducer;