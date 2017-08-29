import React from 'react';
import { capitalize } from '../../../helpers/helpers';
import { Link } from 'react-router-dom';

const VenueCell = ({ venueId, venue, pictureUrl }) => {
  const style = { 
    'backgroundImage': `url(${ pictureUrl })`,
  };
  if (venue) {
    return (
      <div className='venue-cell'>
        <Link to={ '/homes/' + venueId }>
          <div className='venue-cell-image' 
            style={ style }>
          </div>
        </Link>
        <Link to={ '/homes/' + venueId }>
          <div className='venue-cell-title'>
            <span>From ${ venue.price }</span>
            <span> · </span>
            <span>{ venue.name }</span>
          </div>
        </Link>
        <Link to={ '/homes/' + venueId }>
          <div className='venue-cell-sub'>
            <span>{ capitalize(venue.room_type) }</span>
            <span> · </span>
            <span>{ venue.beds } beds</span>
          </div>
        </Link>
      </div>
    );
  }
};

export default VenueCell;