class SeedHelper
  extend GoogleMapsHelper
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
    check_in: Time.now,
    check_out: Time.now + (r.rand(5) + 1).days,
    price: r.rand(900) + 1
  )
  venue.save!
end

