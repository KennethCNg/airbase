export const loggedIn = (state) => {
  return Boolean(state.session.currentUser);
};

export const currentUser = (state) => {
  return state.session.currentUser;
};
