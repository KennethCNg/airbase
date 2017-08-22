import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './SessionForm';
import { login, signup } from '../actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname === '/login' ? 'login' : 'signup';
  return {
    loggedIn: state.session.currentUser === null,
    errors: state.session.errors,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const pathName = ownProps.location.pathname;
  if (pathName === '/login') {
    return {
      processForm: (user) => dispatch(login(user))
    };
  } else {
    return {
      processForm: (user) => dispatch(signup(user))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
