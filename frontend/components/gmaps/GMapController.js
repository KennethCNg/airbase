import * as _ from 'lodash';

class GMapController {
  
  constructor(map) {
    this.map = map;
    this.markers = [];
    this.eventListeners = [];
    
    this.renderMarkers = this.renderMarkers.bind(this);
    this.fetchVenuesInBounds = this.fetchVenuesInBounds.bind(this);
    
    this.addEventListeners();
  }
  
  addEventListeners() {
    const listener = this.map.addListener('idle', this.fetchVenuesInBounds);
    this.eventListeners.push(listener);
  }

  removeEventListeners() {
    this.eventListeners.forEach( listener => {
      google.maps.event.removeListener(listener);
    });
  }
  
  fetchVenuesInBounds() {
    // pass bounds as arrays of [top, right, bottom, left]
    const params = {
      coords: calculateBounds(this.map.getBounds()),
    };
    this.fetchVenues(params);
  }
  
  renderMarkers(positions, venues) {
    this.markers.map( m => m.setMap(null));
    const latLngs = this.posArrayToLatLngs(positions);
    latLngs.forEach( (pos, idx) => {
      const marker = new google.maps.Marker({
        position: pos,
        map: this.map,
      });
      this.markers.push(marker);
    });
  }
  
  recenter(positions) {
    const size = positions.length;
    const lats = positions.map( pos => pos[0] );
    const lngs = positions.map( pos => pos[1] );
    const avgLng = lngs.reduce((acc, el) => acc + el) / size;
    const avgLat = lats.reduce((acc, el) => acc + el) / size;
    this.map.panTo({ lat: avgLat, lng: avgLng });
  }
  
  posArrayToLatLngs(positions) {
    return positions.map( pos => { 
      return {lat: pos[0], lng: pos[1]};
    });
  }
  
}

export default GMapController;

function calculateBounds(bounds) {
  const lngMax = bounds.getNorthEast().lng();
  const lngMin = bounds.getSouthWest().lng();
  const latMax = bounds.getNorthEast().lat();
  const latMin = bounds.getSouthWest().lat();
  if (lngMax > lngMin) {
    return [ latMax, lngMax, latMin, lngMin ];
  } else {
    return [
      // account for crossing the International Date Line
      // provide bounds in two segments
      latMax, 180, latMin, lngMin, 
      latMax, lngMax, latMin, -180
    ];
  }
}