export const selectReviews = state => {
  return state.entities.reviews;
};

export const selectReviewsErrors = state => {
  return state.entities.reviews.errors;
};