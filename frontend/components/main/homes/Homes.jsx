import React from 'react';
import GMap from '../gmaps/GMap';
import HomesList from './HomesList';

const Homes = (props) => {
  // Pass in map-container DOM element into React component as ref so
  // it exists outside the component lifecycle.
  // const mapContainer = document.getElementById('map-container');
  return (
    <div id='homes'>
      <HomesList />
      <GMap />
    </div>
  );
};

export default Homes;