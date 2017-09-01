import React from 'react';
import VenueShowSecNav from './VenueShowSecNav';
import VenueDescription from './VenueDescription';

class VenueShow extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }
  
  componentDidMount() {
    if (!this.props.venue) {
      this.props.fetchVenue(this.id);
      this.props.fetchBookings(this.id);
    }
  }
  
  componentWillReceiveProps(nextProps) {
    console.log('navigated to new page');
    //TODO: need to fetch here if venue not exist or match id different than current id
  }
  
  render() {
    if (this.props.venue) {
      return (
        <div id='venue-show'>
          <VenueShowSecNav />
          <VenueDescription 
            venue={ this.props.venue }
          />
        </div>
      );
    } else {
      return (
        <div id='venue-show'></div>
      );
    }
  }
  
}

export default VenueShow;