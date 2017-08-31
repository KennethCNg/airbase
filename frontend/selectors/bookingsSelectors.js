export const selectBookings = state => {
  return state.entities.bookings;
};

export const selectBookingsErrors = state => {
  return state.entities.bookings.errors;
};