import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import SignupModal from './SignupModal';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(signup(user)),
    buttonText: 'Sign Up',
  };
};

export default connect(null, mapDispatchToProps)(SignupModal);