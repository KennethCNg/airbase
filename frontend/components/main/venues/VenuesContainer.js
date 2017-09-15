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

export default connect(mapStateToProps)(Venues);