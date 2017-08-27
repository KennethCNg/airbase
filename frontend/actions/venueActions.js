import * as VenueUtil from '../util/VenueUtil';
export const RECEIVE_VENUES = 'RECEIVE_VENUES';

export const receiveVenues = venues => {
  return {
    type: RECEIVE_VENUES,
    venues
  };
};

export const getVenues = () => dispatch => {
  return VenueUtil.getVenues()
  .then(
    res => {
      dispatch(receiveVenues(res.data));
    },
    error => {
      // handle error
    }
  );
};