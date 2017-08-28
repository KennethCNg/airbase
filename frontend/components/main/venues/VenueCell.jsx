import React from 'react';
import { capitalize } from '../../../helpers/helpers';

const VenueCell = ({ venueId, venue, pictureUrl }) => {
  if (venue) {
    return (
      <div className='venue-cell'>
        <img src={ pictureUrl } />
        <div>
          <span>From ${ venue.price }</span>
          <span> · </span>
          <span>{ venue.name }</span>
        </div>
        <div>
          <span>{ capitalize(venue.room_type) }</span>
          <span> · </span>
          <span>{ venue.beds } beds</span>
        </div>
      </div>
    );
  }
};

export default VenueCell;