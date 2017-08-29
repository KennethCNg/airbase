import React from 'react';
import { capitalize } from '../../../helpers/helpers';

const VenueCell = ({ venueId, venue, pictureUrl }) => {
  const style = { 
    'background-image': `url(${ pictureUrl })`,
  };
  if (venue) {
    return (
      <div className='venue-cell'>
        <div className='venue-cell-image' 
          style={ style }>
        </div>
        <div className='venue-cell-title'>
          <span>From ${ venue.price }</span>
          <span> · </span>
          <span>{ venue.name }</span>
        </div>
        <div className='venue-cell-sub'>
          <span>{ capitalize(venue.room_type) }</span>
          <span> · </span>
          <span>{ venue.beds } beds</span>
        </div>
      </div>
    );
  }
};

export default VenueCell;