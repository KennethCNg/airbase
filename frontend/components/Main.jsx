import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/sessionActions';
import { toggleLogin, toggleSignup } from '../actions/uiActions';

// TODO: Move logout button into nav.
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    toggleLogin: () => dispatch(toggleLogin),
    toggleSignup: () => dispatch(toggleSignup),
  };
};

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    // this.handleLogout = this.handleLogout.bind(this);
    // this.handleLogin() = this.handleLogin().bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }
  
  handleLogout(e) {
    this.props.logout();
  }
  
  handleLogin(e) {
    this.props.login();
  }
  
  handleSignup(e) {
    this.props.signup();
  }
  
  render() {
    return (
      <div className='debug'>
        <h2>-------------DEBUG-------------</h2>
        <div><button onClick={ this.props.logout }>Logout</button></div>
        <div><button onClick={ this.props.toggleLogin }>Login</button></div>
        <div><button onClick={ this.props.toggleSignup }>Signup</button></div>
      </div>
    );
  }
  
}

export default connect(null, mapDispatchToProps)(Main);
