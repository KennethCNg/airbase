import { connect } from 'react-redux';
import Venues from './Venues';
import { fetchVenues } from '../../../actions/venuesActions';
import { selectVenues } from '../../../selectors/venuesSelectors';

const mapStateToProps = state => {
  return {
    venues: selectVenues(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVenues: () => { dispatch(fetchVenues()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Venues);