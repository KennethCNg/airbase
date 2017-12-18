# https://developers.google.com/places/web-service/supported_types
PLACE_TYPE = 'lodging'
API_KEY = ENV['GOOGLE_API_KEY']
GOOGLE_GEOCODE_BASE_URI = 'https://maps.googleapis.com/maps/api/geocode/json?'
GOOGLE_PLACES_BASE_URI = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
GOOGLE_DETAILS_BASE_URI = 'https://maps.googleapis.com/maps/api/place/details/json?'
GOOGLE_PLACE_PHOTOS_BASE_URI = 'https://maps.googleapis.com/maps/api/place/photo?'

NEW_YORK = 'new_york'
BROOKLYN = 'brooklyn'
HONG_KONG = 'hong_kong'
LONDON = 'london'
SEOUL = 'seoul'
MELBOURNE = 'melbourne'
KYOTO = 'kyoto'
BERLIN = 'berlin'

CITY_COORDS = {
  new_york: "40.7505189,-74.0014333",
  new_york_2: "40.733330,-73.995013",
  new_york_3: "40.740576,-73.985652",
  new_york_4: "40.734685,-73.992314",
  new_york_5: "40.725272,-73.997939",
  brooklyn: "40.710513, -73.940305",
  brooklyn_2: "40.695373, -73.984229",
  hong_kong: "22.319353,114.1633169",
  london: "51.5281613,-0.6619945",
  seoul: "37.575654,126.975786",
  melbourne: "-37.858901,145.074694",
  kyoto: "35.011081,135.758882",
  berlin: "52.527018,13.406480"
}

def fetch_places(location)
  options = {
    query: {
      key: API_KEY,
      location: location,
      rankby: 'prominence',
      radius: 5000,
      type: PLACE_TYPE
    }
  }
  resp = HTTParty.get(GOOGLE_PLACES_BASE_URI, options)
  results = resp.parsed_response["results"]  
end

def fetch_place_details(place_id)
  options = {
    query: {
      key: API_KEY,
      placeid: place_id
    }
  }
  resp = HTTParty.get(GOOGLE_DETAILS_BASE_URI, options)
  results = resp.parsed_response["result"]
end

def fetch_place_photo(photo_reference, max_height)
  options = {
    query: {
      key: API_KEY,
      photo_reference: photo_reference,
      maxheight: max_height
    }
  }
  resp = HTTParty.get(GOOGLE_PLACE_PHOTOS_BASE_URI, options)
end

def parse_addr_comps(city_symbol, addr_comps)
  # return STREET, CITY, STATE, COUNTRY, POSTAL CODE
  if city_symbol.to_s.include?(NEW_YORK)
    if addr_comps.size < 8
      puts 'Fetched addr_comps incomplete, skipping'
      return
    end
    return [
      "#{addr_comps[0]['long_name']} #{addr_comps[1]['long_name']}",
      "#{addr_comps[2]['long_name']}",
      "#{addr_comps[3]['long_name']}",
      "#{addr_comps[6]['long_name']}",
      "#{addr_comps[7]['long_name']}"
    ]
  elsif city_symbol.to_s.include?(HONG_KONG)
    if addr_comps.size < 4
      puts 'Fetched addr_comps incomplete, skipping'
      return
    end
    return [
      "#{addr_comps[0]['long_name']} #{addr_comps[1]['long_name']}",
      "#{addr_comps[2]['long_name']}",
      "#{addr_comps[3]['long_name']}",
      "#{addr_comps[4]['long_name']}",
      nil
    ]
  elsif city_symbol.to_s.include?(LONDON)
    if addr_comps.size < 6
      puts 'Fetched addr_comps incomplete, skipping'
      return
    end
    return [
      "#{addr_comps[0]['long_name']}",
      "#{addr_comps[1]['long_name']}",
      "#{addr_comps[3]['long_name']}",
      "#{addr_comps[4]['long_name']}",
      "#{addr_comps[5]['long_name']}"
    ]
  elsif city_symbol.to_s.include?(SEOUL)
    if addr_comps.size < 7
      puts 'Fetched addr_comps incomplete, skipping'
      return
    end
    return [
      "#{addr_comps[0]['long_name']} #{addr_comps[1]['long_name']}",
      "#{addr_comps[2]['long_name']}",
      "#{addr_comps[4]['long_name']}",
      "#{addr_comps[5]['long_name']}",
      "#{addr_comps[6]['long_name']}"
    ]
  elsif city_symbol.to_s.include?(MELBOURNE)
    if addr_comps.size < 7
      puts 'Fetched addr_comps incomplete, skipping'
      return
    end
    return [
      "#{addr_comps[0]['long_name']} #{addr_comps[1]['long_name']}",
      "#{addr_comps[3]['long_name']}",
      "#{addr_comps[4]['long_name']}",
      "#{addr_comps[5]['long_name']}",
      "#{addr_comps[6]['long_name']}"
    ]
  elsif city_symbol.to_s.include?(KYOTO)
    if addr_comps.size < 6
      puts 'Fetched addr_comps incomplete, skipping'
      return
    end
    return [
      "#{addr_comps[0]['long_name']}",
      "#{addr_comps[1]['long_name']}",
      "#{addr_comps[3]['long_name']}",
      "#{addr_comps[4]['long_name']}",
      "#{addr_comps[5]['long_name']}",
    ]
  elsif city_symbol.to_s.include?(BERLIN)
    if addr_comps.size < 7
      puts 'Fetched addr_comps incomplete, skipping'
      return
    end
    return [
      "#{addr_comps[0]['long_name']} #{addr_comps[1]['long_name']}",
      "#{addr_comps[2]['long_name']}",
      "#{addr_comps[3]['long_name']}",
      "#{addr_comps[5]['long_name']}",
      "#{addr_comps[6]['long_name']}"
    ]
  end
end
