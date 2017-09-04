import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectVenue } from '../../../selectors/venuesSelectors';
import { selectReviews, selectReviewsErrors } from '../../../selectors/reviewsSelectors';
import { selectBookings, selectBookingsErrors } from '../../../selectors/bookingsSelectors';
import { currentUser, currentUserBookings } from '../../../selectors/sessionSelectors';
import { selectUsers } from '../../../selectors/usersSelectors';
import { fetchReviews, postReview, receiveErrors } from '../../../actions/reviewsActions';
import { fetchUsersByIds } from '../../../actions/usersActions';
import { parseDate } from '../../../helpers/helpers';
import * as _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    venue: selectVenue(state, id),
    reviews: selectReviews(state),
    errors: selectReviewsErrors(state),
    currentUser: currentUser(state),
    users: selectUsers(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: id => { dispatch(fetchReviews(id)); },
    fetchUsersByIds: ids => { dispatch(fetchUsersByIds(ids)); },
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
  
  shouldRenderReviews() {
    return !_.isEmpty(this.props.reviews) && !_.isEmpty(this.props.users);
  }
  
  render() {
    if (this.props.venue) {
    return (
      <div id='venue-reviews'>
          <div className='ven-desc-about-main-header'>Reviews</div>
          { this.shouldRenderReviews() && 
            Object.values(this.props.reviews).map( (review, idx) => { 
              const user = this.props.users[review.user_id];
              return (
                <div className='ven-review' key={idx}>
                  <div>
                    <span className='ven-rev-user'>{ user.firstname } { user.lastname }</span>
                  </div>
                  <span>{ review.body }</span>
                </div>
              );
          } ) }
          <form onSubmit={ this.handleSubmit } >
            <textarea className='review-body' type='text' onChange={ this.handleChangeBody } value={this.state.body} />
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