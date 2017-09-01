import React from 'react';
import { connect } from 'react-redux';
import { selectVenues, selectVenueCoordinates } 
  from '../../../selectors/venuesSelectors';
import GMapStyles from './GMapStyles';
import GMapController from './GMapController';

const mapStateToProps = state => {
  return {
    venues: selectVenues(state),
    coords: selectVenueCoordinates(state),
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
    this.map = new window.google.maps.Map(this.mapContainer, mapOptions);
    this.controller = new GMapController(this.map);
  }
  
  componentWillReceiveProps(nextProps) {
    this.controller.renderMarkers(nextProps.coords, nextProps.venues);
    this.controller.recenter(nextProps.coords);
  }

  render() {
    return (
      // https://facebook.github.io/react/docs/refs-and-the-dom.html#adding-a-ref-to-a-dom-element
      // allows component to reference this div as this.mapContainer
      <div id='map-wrapper'>
        <div id='map-container' ref={ domEl => { this.mapContainer = domEl; } }>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps)(GMap);