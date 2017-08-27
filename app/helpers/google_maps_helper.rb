module GoogleMapsHelper
  # https://developers.google.com/places/web-service/supported_types
  PLACE_TYPE = 'lodging'
  API_KEY = ENV['GOOGLE_API_KEY']
  GOOGLE_PLACES_BASE_URI = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
  GOOGLE_DETAILS_BASE_URI = 'https://maps.googleapis.com/maps/api/place/details/json?'
  GOOGLE_GEOCODE_BASE_URI = 'https://maps.googleapis.com/maps/api/geocode/json?'

  CITY_COORDS = {
    new_york: "40.7505189,-74.0014333"
  }
  
  def get_places
    options = {
      query: {
        key: API_KEY,
        location: CITY_COORDS[:new_york],
        rankby: 'prominence',
        radius: 5000,
        type: PLACE_TYPE
      }
    }
    resp = HTTParty.get(GOOGLE_PLACES_BASE_URI, options)
    results = resp.parsed_response["results"]  
  end
  
  #  get place detail based on google place_id
  def get_place_detail(place_id)
    options = {
      query: {
        key: API_KEY,
        placeid: place_id
      }
    }
    resp = HTTParty.get(GOOGLE_DETAILS_BASE_URI, options)
    results = resp.parsed_response["result"]
  end
  
end