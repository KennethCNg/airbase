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

cities = GoogleMapsHelper::CITY_COORDS.keys
cities.each do |city|
  location = GoogleMapsHelper::CITY_COORDS[city]
  places = SeedHelper::fetch_places(location)
  puts "Fetched places for #{city}"
  
  places.each do |place|
    details = SeedHelper::fetch_place_details(place["place_id"])
    addr_comps = details['address_components']
    street = "#{addr_comps[0]["long_name"]} #{addr_comps[1]["long_name"]}"
    state = "#{addr_comps[3]["long_name"]}" if addr_comps[3]
    country = "#{addr_comps[6]["long_name"]}" if addr_comps[6]
    postal_code = "#{addr_comps[7]["long_name"]}" if addr_comps[7]
    listing_start = Time.zone.now + (r.rand(5) + 1).days
    listing_stop = listing_start + 3.months + (r.rand(10) + 1).days
    venue = Venue.new(
      host_id: User.all.sample.id,
      accommodates: r.rand(10) + 1,
      bathrooms: r.rand(2) + 1,
      bedrooms: r.rand(4) + 1,
      beds: r.rand(6) + 1,
      property_type: Venue::PROPERTY_TYPES.sample,
      room_type: Venue::ROOM_TYPES.sample,
      name: place["name"],
      street: street,
      city: "#{addr_comps[2]["long_name"]}",
      state: state,
      country: country,
      postal_code: postal_code,
      lat: place["geometry"]["location"]["lat"],
      lng: place["geometry"]["location"]["lng"],
      minimum_stay: r.rand(2),
      listing_start: listing_start,
      listing_stop: listing_stop,
      description_about: Faker::Lorem.paragraph(r.rand(3) + 4, true),
      description_space: Faker::Lorem.paragraphs(r.rand(2) + 4, true).join,
      description_guest_access: Faker::Lorem.paragraphs(r.rand(2) + 1, true).join,
      description_guest_interaction: Faker::Lorem.paragraph(r.rand(2) + 1, true),
      description_other_notes: Faker::Lorem.paragraph(r.rand(2) + 1, true),
      price: r.rand(300) + 200,
      cleaning_fee: r.rand(20) + 20,
      security_deposit: r.rand(100) + 100,
      weekend_price: r.rand(20) + 20,
      weekly_discount: r.rand(20) + 20,
      monthly_discount: r.rand(20) + 20,
      extra_person_cost: r.rand(20) + 20,
      extra_person_threshold: r.rand(4) + 4
    )
    venue.save!
    puts "Created venue #{venue.id}"
    
    if details['photos']
      photo_ref = details['photos'][0]['photo_reference']
      images = [
        SeedHelper::fetch_place_photo(photo_ref, 1600),
        SeedHelper::fetch_place_photo(photo_ref, 400)
      ]
      # Attach image from google webservice to venue via paperclip.
      # test with local image
      # image = File.open(File.join(Rails.root,'app/assets/images/venues/building.jpg'))
      # create image from stream
      images.each do |image_resp|
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
    end
    puts "Pictures for #{venue.id} saved to AWS"
  end
  
end
puts "Seeding completed"

