import { toggleLoginModal } from '../../actions/uiActions';
import { connect } from 'react-redux';

import React from 'react';

const mapDispatchToProps = dispatch => {
  return {
    toggleLoginModal: () => dispatch(toggleLoginModal()),
  };
};

class Login extends React.Component {

  componentDidMount() {
    this.props.toggleLoginModal();
  }

  render() {
    return (
      <div id='login'></div>
    );
  }

}

export default connect(null, mapDispatchToProps)(Login);