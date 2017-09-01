import * as _ from 'lodash';

export const capitalize = str => {
  return str.split(' ').map( w => w[0].toUpperCase() + w.slice(1) ).join(' ');
};

export const queryStringFrom = obj => {
  return _.keys(obj).map( k => `${k}=${obj[k]}` ).join('&');
};

export const parseDate = time => {
  const d = new Date(time);
  return `${ d.getMonth() + 1 }/${ d.getDate() }/${ d.getFullYear() }`;
};
