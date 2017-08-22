import React from 'react';
import SessionFormContainer from './SessionFormContainer';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil';
import SignupModal from './modals/SignupModal';
import LoginModal from './modals/LoginModal';
import Main from './Main';
// We need a header toolbar

import { logout } from '../util/SessionApiUtil';

const App = () => {
  return (
    <div>
      <header>
        <h1>Airbase</h1>
      </header>
      
      <AuthRoute path='/signup' component={SignupModal} />
      <AuthRoute path='/login' component={LoginModal} />
      <ProtectedRoute path='/' component={ Main } />
    </div>
  );
};

export default App;
