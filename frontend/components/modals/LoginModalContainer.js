import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';
import { toggleLoginModal } from '../../actions/uiActions';
import LoginModal from './LoginModal';

const mapStateToProps = (state) => {
  return {
    display: state.ui.login
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(login(user)),
    toggleModal: () => dispatch(toggleLoginModal),
    titleText: 'Log in to continue',
    buttonText: 'Log In',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);