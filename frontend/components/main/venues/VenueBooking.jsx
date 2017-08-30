import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    
  };
};

class VenueBooking extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // const user = _.merge({}, this.state);
    // this.props.handleSubmit(user);
    // if (this.props.loggedIn) {
    //   this.setState(initialState);
    // }
  }
  
  render() {
    return (
      <div id='venue-booking'>
        <form onSubmit={ this.handleSubmit }>
          <input name='booking[check_in]' type='text' />
          <input name='booking[check_out]' type='text' />
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(VenueBooking);