import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { login, logout } from './actions/sessionActions';
import { toggleLogin } from './actions/uiActions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser,
        errors: []
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // DEBUG
  window.store = store;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout; // EMERGENCY EJECT
  window.toggleLogin = toggleLogin; // EMERGENCY EJECT
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
