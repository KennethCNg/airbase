import React from 'react';
import VenueCell from './VenueCell';

class VenueList extends React.Component {
  
  renderVenueCells(venues) {
    const venueIds = Object.keys(venues);
    return (
      venueIds.map( (id, idx) => { 
        return <VenueCell 
          key={ idx }
          venueId={ id }
          venue={ venues[id] }
          pictureUrl={ this.props.venuePictureUrls[idx] }
        />;
      } )
    );
  }

  render() {
    return (
      <div id='venue-list'>
        { this.props.venues &&
          this.renderVenueCells(this.props.venues) 
        }
      </div>
    );  
  }
}


export default VenueList;