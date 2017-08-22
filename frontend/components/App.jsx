import React from 'react';
import SessionFormContainer from './SessionFormContainer';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/RouteUtil';
import SignupModal from './modals/SignupModal';
import LoginModal from './modals/LoginModal';

const App = () => {
  return (
    <div>
      <header>
        <h1>Airbase</h1>

      </header>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      
      <SignupModal />
      <LoginModal />
      
    </div>
  );
};

export default App;
