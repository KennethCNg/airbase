import React from 'react';
import { Route } from 'react-router-dom';
import VenuesContainer from './main/venues/VenuesContainer';


const Main = (props) => {    
  return (
    <section id='main'>
      <Route exact path='/homes' component={ VenuesContainer } />
    </section>
  );
};

export default Main;
