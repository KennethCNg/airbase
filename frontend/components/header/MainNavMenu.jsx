import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../../selectors/sessionSelectors';
import { logout } from '../../actions/sessionActions';
import { toggleLoginModal, toggleSignupModal } from '../../actions/uiActions';

const mapStateToProps = (state) => {
  return {
    loggedIn: loggedIn(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    toggleLoginModal: () => dispatch(toggleLoginModal()),
    toggleSignupModal: () => dispatch(toggleSignupModal()),
  };
};

const MainNavMenu = (props) => {
  return (
    <div id='main-nav-menu'>
      { !props.loggedIn && 
        <button 
          className='main-nav-menu-button' 
          onClick={ props.toggleSignupModal }>Sign Up</button> 
      }
      { !props.loggedIn && 
        <button 
          className='main-nav-menu-button' 
          onClick={ props.toggleLoginModal }>Log In</button> 
      }
      { props.loggedIn && 
        <button 
          className='main-nav-menu-button' 
          onClick={ props.logout }>Log Out</button> 
      }
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavMenu);