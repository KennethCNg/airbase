import React from 'react';
import { propContains } from '../../../helpers/helpers';

class VenueShow extends React.Component {
  
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
  }
  
  componentDidMount() {
    if (!propContains(this.props.venues, this.id)) {
      this.props.fetchVenue(this.id);
    }
  }
  
  render() {
    return (
      <div>
        <h1>This is venue show</h1>
      </div>
    );
  }
  
}

export default VenueShow;