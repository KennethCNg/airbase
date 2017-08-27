import React from 'react';
import VenueCell from './VenueCell';

class VenueList extends React.Component {
  
  // might need state later on to keep track of activity on each venue
  
  // componentWillReceiveProps(nextProps) {
  // }
  
  renderVenueCells(venues) {
    const venueIds = Object.keys(venues);
    return (
      venueIds.map( (id, idx) => { 
        return <VenueCell key={ idx } id={ id } venue={ venues[id] } />;
      } )
    );
  }

  render() {
    return (
      <div id='venue-list'>
        {
          this.renderVenueCells(this.props.venues) 
        }
      </div>
    );  
  }
}


export default VenueList;