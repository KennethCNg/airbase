import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = () => {
  return (
    <div id='sub-nav'>
      <Link className='subnav-link' to='/homes'>Homes</Link>
      <Link className='subnav-link' to='/reservations'>Reservations</Link>      
    </div>
  );
};
  
export default SubNav;