import { connect } from 'react-redux';
import { loggedIn } from '../../selectors/sessionSelectors';
import { signup, clearErrors } from '../../actions/sessionActions';
import { toggleSignupModal, toggleLoginModal } from '../../actions/uiActions';
import SignupModal from './SignupModal';

const mapStateToProps = (state) => {
  return {
    display: state.ui.signup,
    errors: state.session.errors,
    loggedIn: loggedIn(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(signup(user)),
    toggleSignupModal: () => {
      dispatch(clearErrors());
      dispatch(toggleSignupModal());
    },
    toggleLoginModal: () => {
      dispatch(clearErrors());
      dispatch(toggleLoginModal());
    },
    titleText: 'Register a new account',
    buttonText: 'Sign Up',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);