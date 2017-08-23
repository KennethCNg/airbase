import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/sessionActions';
import { toggleLogin, toggleSignup } from '../actions/uiActions';

// TODO: This can probable be changed into a functional component,
// it's not maintaining any state, only rendering other elements.

// TODO: Move logout button into nav.
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    toggleLogin: () => dispatch(toggleLogin),
    toggleSignup: () => dispatch(toggleSignup),
  };
};

const Main = (props) => {    
  return (
    <section id='main'>
      <h2>-------------DEBUG-------------</h2>
      <div><button onClick={ props.logout }>Logout</button></div>
      <div><button onClick={ props.toggleLogin }>Login</button></div>
      <div><button onClick={ props.toggleSignup }>Signup</button></div>
    </section>
  );
};

export default connect(null, mapDispatchToProps)(Main);
