import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';
import AuthModal from './AuthModal';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(login(user)),
    titleText: 'Log in to continue',
    buttonText: 'Log In',
  };
};

export default connect(null, mapDispatchToProps)(AuthModal);