import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectVenue } from '../../../selectors/venuesSelectors';
import { selectBookings } from '../../../selectors/bookingsSelectors';
import { selectGuestsDisplayed } from '../../../selectors/uiSelectors';
import { fetchBookings } from '../../../actions/bookingsActions';
import { toggleSelectGuests } from '../../../actions/uiActions';
import Dropdown from '../../modals/Dropdown';
import * as _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    venue: selectVenue(state, id),  
    bookings: selectBookings(state),
    selectGuestsDisplayed: selectGuestsDisplayed(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: id => { dispatch(fetchBookings(id)); },
    toggleSelectGuests: () => { dispatch(toggleSelectGuests()); },
  };
};

class VenueBooking extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectGuestsClickHandler = this.selectGuestsClickHandler.bind(this);
    this.state = {
      guestCount: '1',
    };
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
  
  selectGuestsClickHandler(e) {
    // console.log(e.target.getAttribute('data-val'));
    this.setState({
      guestCount: e.target.getAttribute('data-val'),
    });
    this.props.toggleSelectGuests();
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
                  <input className='ven-book-check-in' name='booking[check_in]' type='text' />
                </div>
                <div className='ven-book-date-group'>
                  <label>Check Out</label>
                  <input className='ven-book-check-out' name='booking[check_out]' type='text' />
                </div>
              </div>
              <div className='ven-book-sec ven-book-guests'>
                <label>Guests</label>
                <div className='button-wrapper select-guests-wrapper'>
                  <button className='button ven-book-select-guests'
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
                    handleClickAway={ this.props.toggleSelectGuests }
                  /> 
                }
                {/* Modal select guests */}
              </div>
              {/* some errors block */}
              <div className='button-wrapper'>
                <button className='button ven-book-book' type='submit'>Book</button>
              </div>
              <div className='button-wrapper'>
                <button className='button ven-book-view-other-listings'
                  >View Other Listings</button>
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