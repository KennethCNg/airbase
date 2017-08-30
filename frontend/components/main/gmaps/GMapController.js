class GMapController {
  
  constructor(map) {
    this.map = map;
    this.addEventListeners();
    this.renderMarkers = this.renderMarkers.bind(this);
  }
  
  addEventListeners() {
    this.map.addListener('tilesloaded', this.handleTilesLoaded);
  }
  
  handleTilesLoaded() {
    // add rerender logic here.
    console.log('tilesloaded!');
  }
  
  renderMarkers(positions) {
    const latLngs = this.posArrayToLatLngs(positions);
    latLngs.forEach( pos => {
      new window.google.maps.Marker({
        position: pos,
        map: this.map,
      });
    });
  }
  
  resizeBounds(positions) {
    
  }
  
  posArrayToLatLngs(positions) {
    return positions.map( pos => { 
      return {lat: pos[0], lng: pos[1]};
    });
  }
  
}

export default GMapController;