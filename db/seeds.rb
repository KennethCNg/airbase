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

demoUser = User.new(
  firstname: 'guest',
  lastname: 'user',
  email: 'd@d.com',
  password: USER_PASSWORD
)
demoUser.save!


# Create Venues
Venue.destroy_all

places = SeedHelper::fetch_places
places.each do |place|
  details = SeedHelper::fetch_place_details(place["place_id"])
  
  addr_comps = details['address_components']
  street = "#{addr_comps[0]["long_name"]} #{addr_comps[1]["long_name"]}"
  check_in = Time.zone.now + (r.rand(5) + 1).days
  check_out = check_in + (r.rand(10) + 1).days
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
    check_in: check_in,
    check_out: check_out,
    price: r.rand(1000) + 1

  )
  venue.save!
  
  # Attach image from google webservice to venue via paperclip.
  photo_ref = details['photos'][0]['photo_reference']
  image_resp = SeedHelper::fetch_place_photo(photo_ref)
  
  # test with local image
  # image = File.open(File.join(Rails.root,'app/assets/images/venues/building.jpg'))
  
  # fetch images from google maps
  venue_image = StringIO.new(image_resp.body)
  venue_image.class.class_eval { attr_accessor :original_filename, :content_type }
  venue_image.original_filename = 'image.jpg'
  venue_image.content_type = image_resp.content_type

  pic = Picture.new(
    image: venue_image,
    imageable: venue
  )
  
  pic.save!
  
end

