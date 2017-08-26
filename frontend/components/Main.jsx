import React from 'react';
import { Route } from 'react-router-dom';

import Homes from './main/homes/Homes';

const Main = (props) => {    
  return (
    <section id='main'>
      <Route exact path='/homes' component={ Homes } />
    </section>
  );
};

export default Main;
