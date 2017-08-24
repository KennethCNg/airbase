import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/sessionActions';
import { toggleSignupModal, toggleLoginModal } from '../../actions/uiActions';
import LoginModal from './LoginModal';

const mapStateToProps = (state) => {
  return {
    display: state.ui.login,
    errors: state.session.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(login(user)),
    toggleSignupModal: () => {
      dispatch(clearErrors());
      dispatch(toggleSignupModal());
    },
    toggleLoginModal: () => {
      dispatch(clearErrors());
      dispatch(toggleLoginModal());
    },
    titleText: 'Log in to continue',
    buttonText: 'Log In',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);