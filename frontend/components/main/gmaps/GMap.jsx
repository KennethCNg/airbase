import React from 'react';
import GMapStyles from './GMapStyles';

class GMap extends React.Component {

  componentDidMount() {
    const CENTER = {lat: 30.1301514, lng: -8.2019344};
    const mapOptions = {
      center: CENTER,
      zoom: 2,
      styles: GMapStyles,
    };
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapContainer, mapOptions);
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