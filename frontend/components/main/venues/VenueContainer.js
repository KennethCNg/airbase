import { connect } from 'react-redux';
import Venues from './Venues';
import { getVenues } from '../../../actions/venueActions';

const mapStateToProps = state => {
  return {
    venues: state.venues,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVenues: () => { dispatch(getVenues()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Venues);