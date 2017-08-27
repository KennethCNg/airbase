class SeedHelper
  extend GoogleMapsHelper
end

# Create Users
User.destroy_all

USER_PASSWORD = 'password'
now_i = Time.now.to_i
r = Random.new(now_i)

5.times do
  name = Faker::Name.unique.name.split
  user = User.new(
    firstname: name[0],
    lastname: name[1],
    email: Faker::Internet.unique.email,
    password: USER_PASSWORD
  )
  user.save!
end


# Create Venues
Venue.destroy_all

places = SeedHelper::get_places
places.each do |place|
  details = SeedHelper::get_place_detail(place["place_id"])
  addr_comps = details['address_components']
  street = "#{addr_comps[0]["long_name"]} #{addr_comps[1]["long_name"]}"
  
  venue = Venue.new(
    host_id: User.all.sample.id,
    accommodates: r.rand(10) + 1,
    bathrooms: r.rand(2) + 1,
    bedrooms: r.rand(4) + 1,
    beds: r.rand(6) + 1,
    property_type: Venue::PROPERTY_TYPES.sample,
    room_type: Venue::ROOM_TYPES.sample,
    lat: place["geometry"]["location"]["lat"],
    lng: place["geometry"]["location"]["lng"],
    name: place["name"],
    street: street,
    city: "#{addr_comps[2]["long_name"]}",
    state: "#{addr_comps[3]["long_name"]}",
    postal_code: "#{addr_comps[7]["long_name"]}",
    check_in: Time.zone.now,
    check_out: Time.zone.now + (r.rand(5) + 1).days,
    price: r.rand(1000) + 1

  )
  venue.save!
end

