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

  render() {
    return (
      <div id='venues'>
        <VenueList />
        <GMap />
      </div>
    );
    
  }
}

export default Venues;