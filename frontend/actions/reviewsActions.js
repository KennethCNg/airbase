import * as ReviewsUtil from '../util/ReviewsUtil';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEWS_ERRORS = 'RECEIVE_REVIEWS_ERRORS';
export const RECEIVE_NEW_REVIEW = 'RECEIVE_NEW_REVIEW';

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  };
};

export const receiveNewReviews = reviews => {
  return {
    type: RECEIVE_NEW_REVIEW,
    reviews,
  };
};

export const receiveErrors = errors => {
  return {
      type: RECEIVE_REVIEWS_ERRORS,
      errors
  };
};

export const fetchReviews = venueId => dispatch => {
  return ReviewsUtil.fetchReviews(venueId)
    .then(
      res => {
        dispatch(receiveReviews(res.data));
      }
    );
};

export const postReview = reviewParams => dispatch => {
  return ReviewsUtil.postReview(reviewParams)
    .then(
      res => {
        dispatch(receiveReviews(res.data));
        dispatch(receiveNewReviews(res.data));
      },
      error => {
        dispatch(receiveErrors(error.response.data));
      }
    );
};