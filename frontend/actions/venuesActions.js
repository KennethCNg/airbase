import * as VenuesUtil from '../util/VenuesUtil';
export const RECEIVE_VENUES = 'RECEIVE_VENUES';

export const receiveVenues = venues => {
  return {
    type: RECEIVE_VENUES,
    venues
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