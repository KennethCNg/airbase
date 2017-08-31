import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/RouteUtil';
import SignupModalContainer from './modals/SignupModalContainer';
import LoginModalContainer from './modals/LoginModalContainer';
import Main from './Main';
import Header from './Header';

const App = () => {
  return (
    <div id='app'>
      <Route path='/' component={ SignupModalContainer } />
      <Route path='/' component={ LoginModalContainer } />
      <Route path='/' component={ Header } />
      <Route path='/' component={ Main } />
      <Route exact path='/' render={ () => <Redirect to='/homes' /> } />
    </div>
  );
};

export default App;
