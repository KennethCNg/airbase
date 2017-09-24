import React from 'react';
import { connect } from 'react-redux';
import { fetchUserBookings } from '../../actions/bookingsActions';
import { currentUser } from '../../selectors/sessionSelectors';
import { selectVenues } from '../../selectors/venuesSelectors';
import { selectBookings } from '../../selectors/bookingsSelectors';
import { parseDate, readableDateRange } from '../../helpers/helpers';

const mapStateToProps = state => {
  return {
    currentUser: currentUser(state),
    venues: selectVenues(state),
    bookings: selectBookings(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserBookings: userId => dispatch(fetchUserBookings(userId)),
  };
};

class BookingsList extends React.Component {

  componentDidMount() {
    const { fetchUserBookings, currentUser } = this.props;
    fetchUserBookings(currentUser.id);
  }

  render() {
    const { bookings, venues } = this.props;
    return (
      <div className='bl-wrapper'>
        <div className='bookings-list'>
          <BookingsListTitle/>
          <BookingListTable>
            <BookingsListTH/>
            { Object.values(bookings).map( booking => {
                return <Booking key={ booking.id }
                  {...booking}
                  venue={ venues[booking.venue_id] } />;
            })}
          </BookingListTable>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BookingsList);

function BookingsListTitle(props) {
  return (
    <div className='bl-title'>
      Upcoming Reservations
    </div>
  );
}

function BookingsListTH() {
  return (
    <div className='bl-th'>
      <div>Status</div>
      <div>Dates and Location</div>
      <div>Host</div>
      <div>Details</div>
    </div>
  );
}

function BookingListTable(props) {
  return (
    <div className='bl-table'>
      { props.children }
    </div>
  );
}

function Booking(props) {
  const {
    check_in: checkIn,
    check_out: checkOut,
    venue_id: venueId,
  } = props;
  return (
    <div className='booking'>
      <div className='b-status'></div>     
      <BookingDates checkIn={ checkIn } checkOut={ checkOut } />
      <div className='b-guest'></div>     
      <div className='b-details'></div>     
    </div>
  );
}

function BookingDates({ checkIn, checkOut }) {
  return (
    <div className='b-dates'>
      { readableDateRange(checkIn, checkOut) }
    </div>
  );
}