import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserBookings } from '../../actions/bookingsActions';
import { currentUser } from '../../selectors/sessionSelectors';
import { selectVenues } from '../../selectors/venuesSelectors';
import { selectBookings } from '../../selectors/bookingsSelectors';
import { selectUsers } from '../../selectors/usersSelectors';
import { parseDate, readableDateRange } from '../../helpers/helpers';
import * as _ from 'lodash';

const mapStateToProps = state => {
  return {
    currentUser: currentUser(state),
    venues: selectVenues(state),
    bookings: selectBookings(state),
    users: selectUsers(state),
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
    const { bookings, venues, users } = this.props;
    // Ensure resources are loaded into store before rendering
    if ( _.some([bookings, venues, users], _.isEmpty) ) {
      return ( <div></div> );
    } else {
      return (
        <div id='bl-wrapper'>
            <div id='bookings-list'>
              <BookingsListTitle/>
              <BookingListTable>
                <BookingsListTH/>
                { Object.values(bookings).map( booking => {
                  const venue = venues[booking.venue_id];
                  // Avoid rendering if new venues have not been fetched
                  if (!venue) return;
                  const host = users[venue.host_id];
                  return <Booking key={ booking.id } {...booking}
                    venue={ venue }
                    host={ host } 
                  />;
                })}
              </BookingListTable>
            </div>
        </div>
      );
    }
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
    check_in: checkIn, check_out: checkOut,
    venue, host, id,
  } = props;
  const profilePicture = {
    backgroundImage: `url(${host.profile_picture})`,
  };
  return (
    <div className='booking'>
      <div className='status'>Accepted</div>     
      <BookingDatesLocation key={`bdl-${ id }`}
        checkIn={ checkIn } checkOut={ checkOut }  
        venue={ venue } />
      <div className='host'>
        <div className='profile-picture' style={ profilePicture }></div>
        <div className='host-info'>
          <div className='name'>
            { `${host.firstname} ${host.lastname}` }
          </div>
          <div className='email'>
            { `${host.email}` }
          </div>
        </div>
      </div>     
      <div className='details'></div>     
    </div>
  );
}

function BookingDatesLocation({ checkIn, checkOut, venue }) {
  if (venue) {
    const { street, city, state, postal_code, name, id } = venue;
    return (
      <div className='dates-location'>
        <div>{ readableDateRange(checkIn, checkOut) }</div>
        <div><Link to={ `/homes/${ id }` }>{ name }</Link></div>
        <div>{ 
          `${ street }, ${ city }, ${ state || '' } ${ postal_code || '' }` 
        }</div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}