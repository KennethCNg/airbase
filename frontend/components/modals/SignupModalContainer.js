import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import { toggleSignup } from '../../actions/uiActions';
import SignupModal from './SignupModal';

const mapStateToProps = (state) => {
  return {
    display: state.ui.signup
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(signup(user)),
    toggleModal: () => dispatch(toggleSignup),
    buttonText: 'Sign Up',
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);