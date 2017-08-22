import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/sessionActions';

// TODO: Move logout button into nav.
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    this.props.logout();
  }

  
  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Logout</button>
      </div>
    );
  }
  
}

export default connect(null, mapDispatchToProps)(Main);
