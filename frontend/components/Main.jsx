import React from 'react';
import { Route } from 'react-router-dom';
import VenueContainer from './main/venues/VenueContainer';


const Main = (props) => {    
  return (
    <section id='main'>
      <Route exact path='/homes' component={ VenueContainer } />
    </section>
  );
};

export default Main;
