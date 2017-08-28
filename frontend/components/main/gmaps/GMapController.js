class GMapUtil {
  
  constructor(map) {
    this.map = map;
    this.addEventListeners();
  }
  
  addEventListeners() {
    this.map.addListener('tilesloaded', this.handleTilesLoaded);
  }
  
  handleTilesLoaded() {
    // add rerender logic here.
    console.log('tilesloaded!');
  }
  
}

export default GMapUtil;