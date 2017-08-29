import React from 'react';

const VenueDescription = ({ venue }) => {
  const style = { 
    'backgroundImage': `url(${ venue.picture_url })`,
  };
  
  return (
    <div id='venue-description'>
      <div className='ven-desc-landing-img' 
        style={ style }>
      </div>
      <div className='ven-desc-body'>
        <div className='ven-desc-sec ven-desc-title'>
          <div className='ven-desc-title-name'>{ venue.name }</div>
          <div>
            { venue.city }, { venue.state }, { venue.country } 
            Reviews Placeholder
          </div>
        </div>
        <div className='ven-desc-sec ven-desc-summary-icons'>
          <i className="icon icon-entire-place icon-size" aria-hidden="true"></i>
          <span>{ venue.room_type }</span>
          <span>{ venue.accommodates }</span>
          <span>{ venue.beds }</span>
          <span>{ venue.bedrooms }</span>
        </div>
        <div className='ven-desc-sec ven-desc-about'>
          <div className='ven-desc-about-main-header'>About this listing</div>
          <span>{ venue.description_about }</span>
          <div className='ven-desc-about-header'>The space</div>
          <span>{ venue.description_space }</span>
          <div className='ven-desc-about-header'>Guest access</div>
          <span>{ venue.description_guest_access }</span>
          <div className='ven-desc-about-header'>Interaction with guests</div>
          <span>{ venue.description_guest_interaction }</span>
          <div className='ven-desc-about-header'>Other things to note</div>
          <span>{ venue.description_other_notes }</span>
        </div>
        <div className='ven-desc-sec ven-desc-summary-table'>
        </div>
        
        <div className=''></div>
      </div>
    </div>
  );
};

export default VenueDescription;

