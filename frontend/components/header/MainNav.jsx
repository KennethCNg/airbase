import React from 'react';
import MainNavMenu from './MainNavMenu';
import Search from './Search';

const MainNav = () => {
  return (
    <div id='main-nav'>
      <img id='abnb-logo' src={ window.staticImages.abnb } />
      {/* <S */}
      <MainNavMenu />
    </div>
  );
};

export default MainNav;