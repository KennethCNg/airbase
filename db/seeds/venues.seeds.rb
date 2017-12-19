def create_venues
  Venue.destroy_all

  now_i = Time.now.to_i
  r = Random.new(now_i)

  cities = CITY_COORDS.keys
  cities.each do |city|
    location = CITY_COORDS[city]
    places = fetch_places(location)
    puts "Fetched places for #{city}"
    
    # Fetch places from Google Places API
    places.each do |place|
      details = fetch_place_details(place["place_id"])
      next if details.nil?

      addr_comps = details['address_components']
      parsed_addr_comps = parse_addr_comps(city, addr_comps)
      next if parsed_addr_comps.nil?

      listing_start = Time.zone.now + (r.rand(5) + 1).days
      listing_stop = listing_start + 3.months + (r.rand(10) + 1).days

      # Initialize new venue
      venue = Venue.new(
        host_id: User.all.sample.id,
        accommodates: r.rand(10) + 1,
        bathrooms: r.rand(2) + 1,
        bedrooms: r.rand(4) + 1,
        beds: r.rand(6) + 1,
        property_type: Venue::PROPERTY_TYPES.sample,
        room_type: Venue::ROOM_TYPES.sample,
        name: place["name"],
        street: parsed_addr_comps[0],
        city: parsed_addr_comps[1],
        state: parsed_addr_comps[2],
        country: parsed_addr_comps[3],
        postal_code: parsed_addr_comps[4],
        lat: place["geometry"]["location"]["lat"],
        lng: place["geometry"]["location"]["lng"],
        minimum_stay: r.rand(2),
        listing_start: listing_start,
        listing_stop: listing_stop,
        description_about: VENUE_ABOUTS.sample,
        description_space: VENUE_SPACES.sample,
        description_guest_access: VENUE_GUEST_ACCESS.sample,
        description_guest_interaction: VENUE_GUEST_INTERACTIONS.sample,
        description_other_notes: VENUES_MISC_NOTES.sample,
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


      if !details['photos'].nil?
        photo_ref = details['photos'][0]['photo_reference']
        images = [
          fetch_place_photo(photo_ref, 1600),
          fetch_place_photo(photo_ref, 400)
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
      puts "Pictures for venue #{venue.id} saved to AWS"
    end
    
  end
end

# Disclaimer: descriptions were copied from actual customer reviews off the internet to create a more realistic feel.

VENUE_ABOUTS = [

  "This cozy and fully renovated studio is perfectly located in the heart of the city, steps away from the best restaurants, bars and shopping. Less than a minute walk to the train and other 4 different subway lines. Grocery store, hospital and two pharmacies are conveniently located right across the street. A beautiful park with life jazz is just a couple of blocks away.",

  "Location, location, location! Large, classy, timeless, comfortable, entire top floor with private entrance in our private house out of a 1890's novel, one block from the River. So easy to get to the city by subway, ferry, cab or even foot, and all the best places. Wifi/cableTV/air/heat. 
  (We stay in our separate floor below you never compromising your privacy!)",

  "Brand new fully testy renovated, cozy, bright, clean 2 bedroom apt, many guests can stay in this small apartment comfortably, with the sofa-bed and the couch in the bigger bed room, maximum 6 people can stay in it. Just minutes from town square abd stadium. Easy access to stores restaurants and bus.",

  "Gorgeous studio apartment with a private terrace in the heart of the city steps away from the best restaurants, bars, parks and shopping. 5 minute walk to 4 different subway lines. A beautiful park with life jazz music on the weekends is just a couple of blocks away. There is 1 queen size orthopedic mattress to fit 2 people. Rare find in the most trendy neighborhood!"

]

VENUE_SPACES = [
  
  "Bright and beautiful top floor bedroom apartment features multiple skylights, exposed brick, original fireplace mantels, luxurious modern kitchen and bathroom, high ceilings, and tranquil decor.",

  "Private apartment on top floor of townhouse. The renovated house was built in the 1890's and still has some of the original exposed brick and mantels. We are on a quiet block located in the beautiful and historic Bedford Styvesant neighborhood.",

  "Bright, Cozy and Beautiful and fully equipped bedrooms with QUEEN sized bed, one twin size sofa bed in the living room and another twin size sofa bed which shares the same big bedroom with the Queen Size bed ( you can see it in the picture). There is a parking space in front of our house, serving guests from 3 apartments. You can reserve the parking space at $20/day. If the parking is already reserved by the other guests, we can provide $10/day parking permit, this way, you can park your car in the street."

]

VENUE_GUEST_ACCESS = [

  "You can use everything in the apartment, as long as you use it with care, and don't take it with you! :) Toiletries are included free of charge (including iron, hair dryer, utensils, towels, fresh bedding and much more). You won't find such a bargain anywhere in our expensive city! :)",

  "This apartment is the second floor apartment in the house. It is totally independent and not shared with anyone.",

  "Guests will have privacy in their fully dedicated to airbnb apartment",

  "You can use everything in the apartment, as long as you use it with care, and don't take it with you."

]

VENUE_GUEST_INTERACTIONS = [

  "We will send you the lock code through email. You will not need to meet anyone to get the key, but will use the security code to open the lock. During your stay, you can always contact us through airbnb.com message. We do provide phone # for immediate and emergency contact.",

  "We also live in the building, in separate apartments. We are always available by cell, text, email etc and whenever necessary in person!",

  "I am always available via email as a primary method of contact."

]

VENUES_MISC_NOTES = [
  
  "* After your booking is accepted, we will ask your email address to generate a special lock code for you and send it directly to your email. Make sure you get the security lock codes. If you still not get it days before your check-in, please contact us to get them.

  * If you need reserve the parking space, please contact us as early as possible. We will check if that the parking space is reserved by the other guest and send you the (SENSITIVE CONTENTS HIDDEN) reservation fee request.",

  "*The normal check in time: on or after 4:00 pm, check out time: 11:00 am. After the previous guest group check out at 11:00 am, our cleaning lady need a few hours to clean the rooms. We will guarantee the apartment is ready for next guest by 4:00 pm. But we try to be a little bit flexible to accommodate guest's schedule. If you want to check in early or check out late, you need contact management to arrange.",

  "Please no inquiries without photo, profile and contact info verified. We will not respond and automatically decline. Since our space is for one person or a couple, we provide one set of keys. Thank you",

  "I would recommend downloading Yelp and TodayTix for entertainment, and Seamless and GrubHub for ordering food, if you feel lazy exploring an immense amount of restaurant options in the area. But hey, I do have an awesome kitchen with all needed amenities, so feel free to unleash your inner Chef Fantasies"

]