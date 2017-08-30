import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectVenue } from '../../../selectors/venuesSelectors';
import { selectBookings } from '../../../selectors/bookingsSelectors';
import { fetchBookings } from '../../../actions/bookingsActions';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    venue: selectVenue(state, id),  
    bookings: selectBookings(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: id => { dispatch(fetchBookings(id)); },
  };
};

class VenueBooking extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchBookings(this.props.venueId);
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
    if (this.props.venue) {
      return (
        <div id='venue-booking'>
          <div className='ven-book-price'>
            { this.props.venue.price }
          </div>
          <form onSubmit={ this.handleSubmit }>
            <input name='booking[check_in]' type='text' />
            <input name='booking[check_out]' type='text' />
          </form>
        </div>
      );
    } else {
      return (
        <div id='venue-booking'></div>
      );
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VenueBooking));