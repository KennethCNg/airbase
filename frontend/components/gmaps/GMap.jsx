import React from 'react';
import { connect } from 'react-redux';
import { selectVenues, selectVenueCoordinates } 
  from '../../selectors/venuesSelectors';
import { fetchVenues } from '../../actions/venuesActions';
import GMapStyles from './GMapStyles';
import GMapController from './GMapController';

const mapStateToProps = state => {
  return {
    venues: selectVenues(state),
    coords: selectVenueCoordinates(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVenues: params => {
      dispatch(fetchVenues(params));
    }
  };
};

class GMap extends React.Component {

  componentDidMount() {
    const CENTER = {lat: 30.1301514, lng: -8.2019344};
    const mapOptions = {
      center: CENTER,
      zoom: 2,
      styles: GMapStyles,
      gestureHandling: 'cooperative',
    };
    this.map = new google.maps.Map(this.mapContainer, mapOptions);
    this.controller = new GMapController(this.map);
    // enable controller to dispatch fetchVenues action.
    this.controller.fetchVenues = this.props.fetchVenues;
  }
  
  componentWillReceiveProps(nextProps) {
    this.controller.renderMarkers(nextProps.coords, nextProps.venues);
  }

  componentWillUnmount() {
    this.controller.removeEventListeners();
  }

  render() {
    return (
      // https://reactjs.org/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element
      // This is important for loading Google Maps correctly. See README for
      // a more detailed explaination.
      <div id='map-wrapper'>
        <div id='map-container' ref={ domEl => { this.mapContainer = domEl; } }>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(GMap);