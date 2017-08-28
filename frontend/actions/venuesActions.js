import * as VenuesUtil from '../util/VenuesUtil';
export const RECEIVE_VENUES = 'RECEIVE_VENUES';
export const RECEIVE_VENUE = 'RECEIVE_VENUE';

export const receiveVenues = venues => {
  return {
    type: RECEIVE_VENUES,
    venues
  };
};

export const receiveVenue = (id, venue) => {
  return {
    type: RECEIVE_VENUE,
    id,
    venue,
  };
};

export const fetchVenues = () => dispatch => {
  return VenuesUtil.fetchVenues()
  .then(
    res => {
      dispatch(receiveVenues(res.data));
    },
    error => {
      // handle error
    }
  );
};

export const fetchVenue = (id) => dispatch => {
  return VenuesUtil.fetchVenue(id)
  .then(
    res => {
      dispatch(receiveVenue(id, res.data));
    },
    error => {
      // handle error
    }
  );
};