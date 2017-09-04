import * as ReviewsUtil from '../util/ReviewsUtil';
import * as UsersUtil from '../util/UsersUtil';
import { receiveUsers } from './usersActions';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEWS_ERRORS = 'RECEIVE_REVIEWS_ERRORS';
export const RECEIVE_NEW_REVIEW = 'RECEIVE_NEW_REVIEW';

export const receiveReviews = reviews => {
  return {
    type: RECEIVE_REVIEWS,
    reviews,
  };
};

export const receiveNewReview = review => {
  return {
    type: RECEIVE_NEW_REVIEW,
    review,
  };
};

export const receiveErrors = errors => {
  return {
      type: RECEIVE_REVIEWS_ERRORS,
      errors
  };
};

export const fetchReviews = venueId => dispatch => {
  let reviewUserIds;
  return ReviewsUtil.fetchReviews(venueId)
    .then(
      res => {
        const reviews = res.data;
        reviewUserIds = Object.values(reviews).map( review => review.user_id );
        dispatch(receiveReviews(reviews));
      }
    ).then(
      () => { 
        UsersUtil.fetchUsersByIds(reviewUserIds).then(
          res => {
            dispatch(receiveUsers(res.data));
          }
        );
      }
    );
};

export const postReview = reviewParams => dispatch => {
  let userId;
  return ReviewsUtil.postReview(reviewParams)
    .then(
      res => {
        userId = res.data.user_id;
        dispatch(receiveNewReview(res.data));
      },
      error => {
        dispatch(receiveErrors(error.response.data));
      }
    ).then(
      () => { 
        UsersUtil.fetchUsersByIds([userId]).then(
          res => {
            dispatch(receiveUsers(res.data));
          }
        );
      }
    );
};
