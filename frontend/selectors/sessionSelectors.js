export const loggedIn = (state) => {
  return Boolean(state.session.currentUser);
};

export const currentUser = (state) => {
  return state.session.currentUser;
};

export const currentUserBookings = state => {
  if (state.session.currentUser) {
    return state.session.currentUser.bookings;
  }
};
