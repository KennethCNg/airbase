import React from 'react';
import GMap from '../gmaps/GMap';
import HomesList from './HomesList';

const Homes = (props) => {
  // Pass in map-container DOM element into React component as ref so
  // it exists outside the component lifecycle.
  // const mapContainer = document.getElementById('map-container');
  return (
    <div id='homes-wrapper'>
      <div id='homes'>
        {/* Homes List */}
        <GMap />
      </div>
    </div>
  );
};

export default Homes;