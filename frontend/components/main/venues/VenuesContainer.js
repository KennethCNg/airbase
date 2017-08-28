import { connect } from 'react-redux';
import Venues from './Venues';
import { fetchVenues } from '../../../actions/venuesActions';
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
    fetchVenues: id => { dispatch(fetchVenues(id)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Venues);