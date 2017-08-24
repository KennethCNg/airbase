export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';
export const TOGGLE_SIGNUP = 'TOGGLE_SIGNUP';

export const toggleLoginModal = () => {
  return {
    type: TOGGLE_LOGIN
  };
};

export const toggleSignupModal = () => {
  return {
    type: TOGGLE_SIGNUP
  };
};
