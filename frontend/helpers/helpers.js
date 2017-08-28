export const capitalize = str => {
  return str.split(' ').map( w => w[0].toUpperCase() + w.slice(1) ).join(' ');
};

export const propContains = (props, id) => {
  return props !== null && props[id];
};
