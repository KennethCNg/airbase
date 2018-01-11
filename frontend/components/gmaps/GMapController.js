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
    const mapBounds = this.map.getBounds();
    const params = {
      ne: getNorthEastCorner(mapBounds),
      sw: getSouthWestCorner(mapBounds)
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

function getNorthEastCorner(mapBounds) {
  const ne = mapBounds.getNorthEast();
  return [ne.lat(), ne.lng()];
}

function getSouthWestCorner(mapBounds) {
  const sw = mapBounds.getSouthWest();
  return [sw.lat(), sw.lng()];  
}