import axios from 'axios';

export const fetchReviews = venueId => {
  return axios({
    method: 'GET',
    url: `/api/venues/${venueId}/reviews`,
  });
};

export const postReview = reviewParams => {
  return axios({
    method: 'POST',
    url: `/api/reviews`,
    data: {
      review: reviewParams,
    }
  });
};
