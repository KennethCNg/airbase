export const loggedIn = (state) => {
  return Boolean(state.session.currentUser);
};
