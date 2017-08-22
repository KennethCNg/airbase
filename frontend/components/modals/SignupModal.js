import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';
import AuthModal from './AuthModal';

// const mapStateToProps = (state) => {
//   return {
//     
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (user) => dispatch(signup(user)),
    buttonText: 'Sign Up',
  };
};

export default connect(null, mapDispatchToProps)(AuthModal);