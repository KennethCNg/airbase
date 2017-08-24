import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import { toggleSignupModal, toggleLoginModal } from '../../actions/uiActions';
import SignupModal from './SignupModal';

const mapStateToProps = (state) => {
  return {
    display: state.ui.signup,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(signup(user)),
    toggleSignupModal: () => dispatch(toggleSignupModal),
    toggleLoginModal: () => dispatch(toggleLoginModal),
    titleText: 'Register a new account',
    buttonText: 'Sign Up',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);