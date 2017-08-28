import { connect } from 'react-redux';
import VenueShow from './VenueShow';
import { fetchVenue } from '../../../actions/venuesActions';
import { selectVenues, selectVenueCoordinates, selectVenuePictureUrls }
  from '../../../selectors/venuesSelectors';

const mapStateToProps = state => {
  return {
    venues: selectVenues(state),
    venueCoords: selectVenueCoordinates(state),
    venuePictureUrls: selectVenuePictureUrls(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVenue: (id) => { dispatch(fetchVenue(id)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VenueShow);