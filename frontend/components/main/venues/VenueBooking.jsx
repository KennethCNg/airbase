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
            <span className='ven-book-price-value'>${ this.props.venue.price }</span> per night
          </div>
          <form onSubmit={ this.handleSubmit }>
            <div className='ven-book-form-inner'>
              <div className='ven-book-sec ven-book-date-wrapper'>
                <div className='ven-book-date-group'>
                  <label>Check In</label>
                  <input className='ven-book-check-in' name='booking[check_in]' type='text' />
                </div>
                <div className='ven-book-date-group'>
                  <label>Check Out</label>
                  <input className='ven-book-check-out' name='booking[check_out]' type='text' />
                </div>
              </div>
              <div className='ven-book-sec ven-book-guests'>
                <label>Guests</label>
                <select name="select">
                  {/* { generate options here } */}
                </select>
              </div>
              {/* some errors block */}
              <div className='button-wrapper'>
                {/* modal-button submit-button */}
                <button className='button ven-book-book'>Book</button>
              </div>
              <div className='button-wrapper'>
                {/* modal-button submit-button */}
                <button className='button ven-book-view-other-listings'>View Other Listings</button>
              </div>
            </div>
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