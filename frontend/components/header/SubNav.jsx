import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = () => {
  return (
    <div id='sub-nav'>
      <Link className='subnav-link' to='/'>[DEBUG_ROOT]</Link>
      <Link className='subnav-link' to='/homes'>Homes</Link>
    </div>
  );
};
  
export default SubNav;