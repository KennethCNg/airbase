import React from 'react';
import SessionFormContainer from './SessionFormContainer';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil';
import SignupModalContainer from './modals/SignupModalContainer';
import LoginModalContainer from './modals/LoginModalContainer';
import Main from './Main';
// We need a header toolbar

import { logout } from '../util/SessionApiUtil';

const App = () => {
  return (
    <div id='app'>
      <header>
        <h1>Airbase</h1>
      </header>
      
      <AuthRoute path='/signup' component={SignupModalContainer} />
      <AuthRoute path='/login' component={LoginModalContainer} />
      <ProtectedRoute path='/' component={ Main } />
    </div>
  );
};

export default App;
