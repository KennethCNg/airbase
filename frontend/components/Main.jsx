import React from 'react';
import { Route } from 'react-router-dom';
import VenuesContainer from './venues/VenuesContainer';
import VenueShowContainer from './venues/VenueShowContainer';


const Main = (props) => {    
  return (
    <section id='main'>
      <Route exact path='/homes' component={ VenuesContainer } />
      <Route exact path='/homes/:id' component={ VenueShowContainer } />
    </section>
  );
};

export default Main;
