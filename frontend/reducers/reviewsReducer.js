import { RECEIVE_REVIEWS, 
  RECEIVE_NEW_REVIEW,
  RECEIVE_REVIEWS_ERRORS } from '../actions/reviewsActions';
const initState = {};

const reviewsReducer = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews;
    case RECEIVE_NEW_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case RECEIVE_REVIEWS_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};

export default reviewsReducer;
