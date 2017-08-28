import React from 'react';
import GMapStyles from './GMapStyles';
import GMapController from './GMapController';

class GMap extends React.Component {

  componentDidMount() {
    const coords = this.props.venueCoords;
    const CENTER = {lat: 30.1301514, lng: -8.2019344};
    const mapOptions = {
      center: CENTER,
      zoom: 2,
      styles: GMapStyles,
    };
    this.map = new window.google.maps.Map(this.mapContainer, mapOptions);
    this.controller = new GMapController(this.map);
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

export default GMap;