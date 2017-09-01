import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectVenue } from '../../../selectors/venuesSelectors';
import { selectReviews, selectReviewsErrors } from '../../../selectors/reviewsSelectors';
import { selectBookings, selectBookingsErrors } from '../../../selectors/bookingsSelectors';
import { fetchReviews, postReview, receiveErrors } from '../../../actions/reviewsActions';
import { currentUser, currentUserBookings } from '../../../selectors/sessionSelectors';
import { parseDate } from '../../../helpers/helpers';
import * as _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    venue: selectVenue(state, id),
    reviews: selectReviews(state),
    errors: selectReviewsErrors(state),
    currentUser: currentUser(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: id => { dispatch(fetchReviews(id)); },
    postReview: id => { dispatch(postReview(id)); },
    throwErrors: errors => { dispatch(receiveErrors(errors)); },
  };
};

class VenueReviews extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      rating: '5',
    };
    this.id = this.props.match.params.id;
    this.handleChangeBody = this.handleChangeBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchReviews(this.props.match.params.id);
  }
  
  handleChangeBody(e) {
    this.setState({
      body: e.target.value,
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser === null) {
      this.props.throwErrors([
        'Please log in!'
      ]);
    } else {
      const params = {
        body: this.state.body,
        rating: this.state.rating,
        user_id: this.props.currentUser.id,
        venue_id: this.id,
      };
      this.props.postReview(params);
    }
  }
  
  render() {
    if (this.props.venue) {
    return (
      <div id='venue-reviews'>
          <div className='ven-desc-about-main-header'>Reviews</div>
          { !!this.props.reviews && this.props.reviews.length > 0 && this.props.reviews.map( review => { 
            return <div className='ven-review'></div>;
          } ) }
          <form onSubmit={ this.handleSubmit } >
            <textarea type='text' onChange={ this.handleChangeBody } value={this.state.body} />
            <div className='button-wrapper'>
              <button className='ven-review-button button' type='submit'>Submit Review</button>
            </div>
          </form>
      </div>
    );
  } else {
    return <div id='venue-reviews'></div>;
  }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VenueReviews));