import * as _ from 'lodash';
import moment from 'moment';

// general helpers

export const capitalize = str => {
  return str.split(' ').map( w => w[0].toUpperCase() + w.slice(1) ).join(' ');
};

export const queryStringFrom = obj => {
  return _.keys(obj).map( k => `${k}=${obj[k]}` ).join('&');
};

export const queryStringFromArr = (arr, paramName) => {
  return arr.map( el => `${paramName}[]=${el}` ).join('&');
};

export const parseDate = time => {
  const d = new Date(time);
  return `${ d.getMonth() + 1 }/${ d.getDate() }/${ d.getFullYear() }`;
};

export const readableDateRange = (t1, t2) => {
  const d1 = new moment(t1);
  const d2 = new moment(t2);
  if (d1.month() === d2.month()) {    
    return `${ d1.getMonth() } ` + 
      `${ d1.date() } – ${ d2.date() }, ` + 
      `${ d1.year() }`;
  } else {
    return `${ d1.getMonth() } ${ d1.date() } – ` +
      `${ d2.getMonth() } ${ d2.date() }, ` +
      `${ d1.year() }`;
  }
};

// moment.js helpers

moment.prototype.getMonth = function() {
  return this.format('MMM');
};
