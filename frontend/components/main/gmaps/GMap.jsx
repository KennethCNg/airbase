import React from 'react';

class GMap extends React.Component {
  //...

  componentDidMount() {
    const mapOptions = {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
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

  //...
}

export default GMap;