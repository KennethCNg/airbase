import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../../reducers/sessionSelectors';
import { logout } from '../../actions/sessionActions';
import { toggleLogin, toggleSignup } from '../../actions/uiActions';

const mapStateToProps = (state) => {
  return {
    loggedIn: loggedIn(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    toggleLogin: () => dispatch(toggleLogin),
    toggleSignup: () => dispatch(toggleSignup),
  };
};

const MainNavMenu = (props) => {
  
  return (
    <div>
      {/* Become a Host */}
      {/* Help */}
      { !props.loggedIn && 
        <button 
          className='main-nav-menu-button' 
          onClick={ props.toggleSignup }>Sign Up</button> 
      }
      { !props.loggedIn && 
        <button 
          className='main-nav-menu-button' 
          onClick={ props.toggleLogin }>Log In</button> 
      }
      { props.loggedIn && 
        <button 
          className='main-nav-menu-button' 
          onClick={ props.logout }>Log Out</button> 
      }
      {/* Profile Picture */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavMenu);