import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil';
import SignupModalContainer from './modals/SignupModalContainer';
import LoginModalContainer from './modals/LoginModalContainer';
import Main from './Main';
import Header from './Header';

import { logout } from '../util/SessionApiUtil';

const App = () => {
  return (
    <div id='app'>
      <Route exact path='/' component={SignupModalContainer} />
      <Route exact path='/' component={LoginModalContainer} />
      <Route path='/' component={ Header } />
      <Route path='/' component={ Main } />
    </div>
  );
};

export default App;
