import React from 'react';
import { Route, Redirect, Link, withRouter } from 'react-router-dom';
import { login, clearErrors } from '../actions/sessionActions';
import { toggleSignupModal, toggleLoginModal } from '../actions/uiActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLoginModal: () => {
      dispatch(clearErrors());
      dispatch(toggleLoginModal());
    },
  };
};

const Auth = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={ path }
      render={ 
        props => !loggedIn ? <Component { ...props} /> : <Redirect to="/" />
      }
    />
  );
};

const Protected = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
      path={ path }
      render={ props => loggedIn ? 
        <Component { ...props } /> : <Redirect to="/login" />}
    />
  );
};

const PL = ({ to, loggedIn, children, toggleLoginModal, className }) => {
  if (loggedIn) {
    return (
      <Link className={className} to={ to }>{ children }</Link>
    );
  } else {
    return (
      <a className={className} href='#' onClick={ toggleLoginModal }>{ children }</a>
    );
  }
};

export const AuthRoute = withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const ProtectedLink = connect(mapStateToProps, mapDispatchToProps)(PL);