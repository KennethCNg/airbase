const GMapStyles = [
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "lightness": 100
      },
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#A4DDF5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#C5E3BF"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#D1D1B8"
      }
    ]
  }
];

export default GMapStyles;