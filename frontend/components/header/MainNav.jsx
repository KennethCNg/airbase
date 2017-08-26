import React from 'react';
import MainNavMenu from './MainNavMenu';
import Search from './Search';
import SubNav from './SubNav';

const MainNav = () => {
  return (
    <div>
      <div id='main-nav'>
        <img id='abnb-logo' src={ window.staticImages.abnb } />
        {/* <S */}
        <MainNavMenu />
      </div>
      <SubNav />
    </div>
  );
};

export default MainNav;