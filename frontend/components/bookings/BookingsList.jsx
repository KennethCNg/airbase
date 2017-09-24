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
      <div className='status'>Status</div>
      <div className='dates-location'>Dates and Location</div>
      <div className='host'>Host</div>
      <div className='details'>Details</div>
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
    venue,
  } = props;
  return (
    <div className='booking'>
      <div className='status'>Accepted</div>     
      <BookingDatesLocation 
        checkIn={ checkIn } checkOut={ checkOut }  
        venue={ venue } />
      <div className='guest'></div>     
      <div className='details'></div>     
    </div>
  );
}

function BookingDatesLocation({ checkIn, checkOut, venue }) {
  if (venue) {
    const { street, city, state, postal_code } = venue;
    return (
      <div className='dates-location'>
        <div>{ readableDateRange(checkIn, checkOut) }</div>
        <div>{ venue.name }</div>
        <div>{ `${street}, ${city}, ${state} ${postal_code}` }</div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}