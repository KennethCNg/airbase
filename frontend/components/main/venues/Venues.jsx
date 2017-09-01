import React from 'react';
import GMap from '../gmaps/GMap';
import VenueList from './VenueList';

class Venues extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      venues: props.venues,
    };
  }
  
  componentDidMount() {
    this.props.fetchVenues();
  }

  render() {
    return (
      <div id='venues'>
        <VenueList />
        <GMap 
          // venueCoords={ this.props.venueCoords }
        />
      </div>
    );
    
  }
}

export default Venues;