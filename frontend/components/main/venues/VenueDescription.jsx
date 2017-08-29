import React from 'react';

const VenueDescription = ({ venue }) => {
  const style = { 
    'background-image': `url(${ venue.picture_url })`,
  };
  
  return (
    <div id='venue-description'>
      <div className='ven-desc-landing-img' 
        style={ style }>
      </div>
      <div className='ven-desc-body'>
        <div className='ven-desc-title'>
          <div>{ venue.name }</div>
          <div>
            { venue.city }, { venue.state }, { venue.country } 
            Reviews Placeholder
          </div>
        </div>
        <div className='ven-desc-summary-icons'>
          <span>{ venue.room_type }</span>
          <span>{ venue.accommodates }</span>
          <span>{ venue.beds }</span>
          <span>{ venue.bedrooms }</span>
        </div>
        <div className='ven-desc-about'>
          <span>{ venue.description_about }</span>
          <span>{ venue.description_space }</span>
          <span>{ venue.description_guest_access }</span>
          <span>{ venue.description_guest_interaction }</span>
          <span>{ venue.description_other_notes }</span>
        </div>
        <div className='ven-desc-summary-table'>
        </div>
        
        <div className=''></div>
      </div>
    </div>
  );
};

export default VenueDescription;

