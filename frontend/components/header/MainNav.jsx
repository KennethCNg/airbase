import React from 'react';
import MainNavMenu from './MainNavMenu';
import Search from '../search/Search';
import SubNav from './SubNav';

const MainNav = () => {
  return (
    <div>
      <div id='main-nav'>
        <div id='main-nav-left-group'>
          <div>
            <img id='abnb-logo' src={ window.staticImages.abnb } />
          </div>
          <Search />
        </div>
        <MainNavMenu />
      </div>
      <SubNav />
    </div>
  );
};

export default MainNav;