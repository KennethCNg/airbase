import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectVenue } from '../../../selectors/venuesSelectors';
import { selectBookings, selectBookingsErrors } from '../../../selectors/bookingsSelectors';
import { selectGuestsDisplayed } from '../../../selectors/uiSelectors';
import { currentUser } from '../../../selectors/sessionSelectors';
import { fetchBookings, postBooking } from '../../../actions/bookingsActions';
import { toggleSelectGuests, closeSelectGuests } from '../../../actions/uiActions';
import Dropdown from '../../modals/Dropdown';
import * as _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    venue: selectVenue(state, id),  
    bookings: selectBookings(state),
    selectGuestsDisplayed: selectGuestsDisplayed(state),
    errors: selectBookingsErrors(state),
    currentUser: currentUser(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: id => { dispatch(fetchBookings(id)); },
    postBooking: id => { dispatch(postBooking(id)); },
    toggleSelectGuests: () => { dispatch(toggleSelectGuests()); },
    closeSelectGuests: () => { dispatch(closeSelectGuests()); },
  };
};

const WHITE_LISTED_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/'];

class VenueBooking extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.selectGuestsClickHandler = this.selectGuestsClickHandler.bind(this);
    this.state = {
      guestCount: '1',
      checkIn: '',
      checkOut: '',
    };
  }
  
  componentDidMount() {
    this.props.fetchBookings(this.props.venueId);
  }
  
  handleDateChange(field) {
    return e => {
      if (e.target.value.split('').every( char => WHITE_LISTED_CHARS.includes(char) )) {
        this.setState(Object.assign({}, this.state, { [field]: e.target.value } ));
      }
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const params = {
      check_in: this.state.checkIn,
      check_out: this.state.checkOut,
      user_id: this.props.currentUser.id,
      venue_id: this.id,
    };
    this.props.postBooking(params);
  }
  
  selectGuestsClickHandler(e) {
    this.setState({
      guestCount: e.target.getAttribute('data-val'),
    });
    this.props.closeSelectGuests();
  }
  
  render() {
    if (this.props.venue) {
      const vals = _.range(1, this.props.venue.accommodates + 1);
      const opts = vals.map( val => `${val} guests`);
      return (
        <div id='venue-booking'>
          <div className='ven-book-price'>
            From <span className='ven-book-price-value'>${ this.props.venue.price }</span> per night
          </div>
          <form onSubmit={ this.handleSubmit }>
            <div className='ven-book-form-inner'>
              <div className='ven-book-sec ven-book-date-wrapper'>
                <div className='ven-book-date-group'>
                  <label>Check In</label>
                  <input 
                    className='ven-book-check-in' 
                    name='booking[check_in]'
                    type='text' 
                    value={ this.state.checkIn }
                    onChange={ this.handleDateChange('checkIn') }
                    placeholder='mm/dd/yyyy'
                  />
                </div>
                <div className='ven-book-date-group'>
                  <label>Check Out</label>
                  <input 
                    className='ven-book-check-out' 
                    name='booking[check_out]' 
                    type='text' 
                    value={ this.state.checkOut }
                    onChange={ this.handleDateChange('checkOut') }
                    placeholder='mm/dd/yyyy'
                  />
                </div>
              </div>
              <div className='ven-book-sec ven-book-guests'>
                <label>Guests</label>
                <div className='button-wrapper select-guests-wrapper'>
                  <button className='button ven-book-select-guests' type='button'
                    onClick={ this.props.toggleSelectGuests }
                    >{ this.state.guestCount } guests
                    <img src={ window.staticImages.select_guest_arrow } />
                  </button>
                </div>
                { !!this.props.selectGuestsDisplayed &&
                  <Dropdown domClass='select-guests-dropdown' 
                    opts={ opts }
                    vals={ vals }
                    handleClick={ this.selectGuestsClickHandler }
                    handleClickAway={ this.props.closeSelectGuests }
                  /> 
                }
              </div>
              { !!this.props.errors &&
                <ul className='errors'>
                  { 
                    this.props.errors.map( (err, idx) => {
                      return <li key={ idx }>{ err }</li>;
                    })
                  }
                </ul>
              }
              <div className='button-wrapper'>
                <button className='button ven-book-book' type='submit'>Book</button>
              </div>
              <div className='button-wrapper'>
                <Link className='view-other-listings-buttion' to='/homes'>
                  <button className='button ven-book-view-other-listings'
                    >View Other Listings
                  </button>
                </Link>
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