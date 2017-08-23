import React from 'react';
import { connect } from 'react-redux';
import { loggedIn } from '../../reducers/sessionSelectors';

const mapStateToProps = (state) => {
  return {
    loggedIn: loggedIn(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

const MainNavMenu = (props) => {
  return (
    <div>
      MainNavMenu
    </div>
  );
};

export default connect(mapStateToProps)(MainNavMenu);