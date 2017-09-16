// import GMapMarkerOverlay from './GMapMarkerOverlay';

import * as _ from 'lodash';

class GMapController {
  
  constructor(map) {
    this.map = map;
    this.markers = [];
    
    this.renderMarkers = this.renderMarkers.bind(this);
    this.fetchVenuesInBounds = this.fetchVenuesInBounds.bind(this);
    // this.overlay = new GMapMarkerOverlay(this.map.getBounds());
    
    this.addEventListeners();
  }
  
  addEventListeners() {
    this.map.addListener('idle', this.fetchVenuesInBounds);
  }
  
  fetchVenuesInBounds() {
    const bounds = this.map.getBounds();
    const coords = {
      lng_max: bounds.getNorthEast().lng(),
      lng_min: bounds.getSouthWest().lng(),
      lat_max: bounds.getNorthEast().lat(),
      lat_min: bounds.getSouthWest().lat(),
    };
    this.fetchVenues(coords);
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