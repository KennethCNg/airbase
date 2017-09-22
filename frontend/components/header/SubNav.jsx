import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedLink } from '../../util/RouteUtil';

const SubNav = () => {
  return (
    <div id='sub-nav'>
      <Link className='subnav-link' to='/homes'>Homes</Link>
      <ProtectedLink className='subnav-link' to='/reservations'>Reservations</ProtectedLink>      
    </div>
  );
};
  
export default SubNav;