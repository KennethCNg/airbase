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
      
      <Route exact path='/' component={SignupModalContainer} />
      <Route exact path='/' component={LoginModalContainer} />
      <Route exact path='/' component={ Main } />
    </div>
  );
};

export default App;
