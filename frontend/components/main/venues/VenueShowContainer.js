import { connect } from 'react-redux';
import VenueShow from './VenueShow';
import { fetchVenue } from '../../../actions/venuesActions';
import { fetchBookings } from '../../../actions/bookingsActions';
import { selectVenue, selectVenueCoordinates, selectVenuePictureUrls }
  from '../../../selectors/venuesSelectors';
import { selectBookings } from '../../../selectors/bookingsSelectors';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    venue: selectVenue(state, id),
    venueCoords: selectVenueCoordinates(state),
    venuePictureUrls: selectVenuePictureUrls(state),
    bookings: selectBookings(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVenue: id => { dispatch(fetchVenue(id)); },
    fetchBookings: id => { dispatch(fetchBookings(id)); },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueShow);