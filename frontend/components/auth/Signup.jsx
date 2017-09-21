import { toggleSignupModal } from '../../actions/uiActions';
import { connect } from 'react-redux';

import React from 'react';

const mapDispatchToProps = dispatch => {
  return {
    toggleSignupModal: () => dispatch(toggleSignupModal()),
  };
};

class Signup extends React.Component {

  componentDidMount() {
    this.props.toggleSignupModal();
  }

  render() {
    return (
      <div id='signup'></div>
    );
  }

}

export default connect(null, mapDispatchToProps)(Signup);