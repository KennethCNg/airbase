import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import { toggleSignupModal } from '../../actions/uiActions';
import SignupModal from './SignupModal';

const mapStateToProps = (state) => {
  return {
    display: state.ui.signup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(signup(user)),
    toggleModal: () => dispatch(toggleSignupModal),
    buttonText: 'Sign Up',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);