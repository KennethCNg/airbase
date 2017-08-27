import React from 'react';
import { capitalize } from '../../../helpers/helpers';

const VenueCell = ({ id, venue }) => {
  if (venue) {
    return (
      <div className='venue-cell'>
        <span>${ venue.price }</span>
        <span>{ venue.name }</span>
        <span>{ venue.beds }</span>
        <span>{ capitalize(venue.room_type) }</span>
      </div>
    );
  }
};

export default VenueCell;