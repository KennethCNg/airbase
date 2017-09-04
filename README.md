# Airbase

Airbase is an Airbnb clone. This project serves as a learning experience for integrating technologies I've learnt over the past couple of months. Choosing to build a clone relieved myself from making design/aesthetic decisions, and instead enabled me to focus on development. If this project looks too much alike the actual site, it's because I allotted a significant amount of time to mimic Airbnb's styling. This gave me a deeper appreciation for the attention and time invested into creating good UI/UX.

My project can be [viewed here](https://airbase-sksea.herokuapp.com/#/). Slow initial loads are caused by hosting on Heroku, but I might consider deploying to AWS in the future.

# Technologies

Airbase has a React frontend, with state managed by Redux. React provides more than a means of code reuse, it also implements a Virtual DOM which allows for efficient DOM manipulation, re-rendering only the right elements at the right time, all the while exposing a `component lifecycle` which we can hook into and use to run code at predictable moments. As the app grows, data may need to flow through many layers of components before arriving at its destination. Redux enables us to keep state contained in a central `store` from which components can pick and choose the `slices` of state that concerns them. This avoids the need to thread state through components.

Airbase's backend is a Rails API with a Postgres DB. Rails was chosen mostly for being relatively simple to use. Fortunately, concepts like RESTful conventions and handling the request/response cycle will carry over to other web frameworks I learn in future. Lastly, using Postgres was good practice for using relational databases.

# Dev notes

In this section, I highlight some challenges presented to me over the course of this project, followed by my approach in solving the issue or any findings I took away.

### Integrating third-party javascript components

To clone Airbnb, there is no avoiding the large map taking up 34% of screen estate on the home listing page. I've always been fond of maps, so naturally I found integration with Google maps one the more interesting parts of this project. Showing a map is simple -- the challenge is getting it to play well with react components. More specifically, we want to avoid rendering the Map each time the state of its wrapping component changes (`GMap`, in this case). To get around this, it's possible to have Map exist outside of the component lifecycle by passing it as a `ref` into `GMap`. It feels a bit like inception. Map related logic can then be encapsulated in a new component, for instance `GMapController`.

`gmap.jsx`
```js
class GMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      // initialize map defaults
    }
    this.map = new window.google.maps.Map(this.mapContainer, mapOptions);
    this.controller = new GMapController(this.map); //
  }

  render() {
    return (
      // reference div `map-container` as `this.mapContainer`
      <div id='map-wrapper'>
        <div id='map-container' 
          ref={ domElement => { this.mapContainer = domElement; } } >
        </div>
      </div>
    );
  }
}
```

### Database seeding

Seeding data is important for both visualizing the application's frontend, as well as testing logic in the backend. Doing this manually is futile because it is time consuming and provides too narrow a representation of how our app may actually look and function.

Instead, I had fun pulling data from the Google Places API. Note that fetching data takes a significant amount of time, so it's worth considering to not wipe the entire database during each round of seeding. This allowed me to generate pages that look more reasonable.

I wrote a `GoogleMapsHelper` class for seeding that looked something like this.

`google_maps_helper.rb`
```ruby
module GoogleMapsHelper
    
    # provide coordinates of cities to Google to search
    CITY_COORDS = {
      new_york: "40.7505189,-74.0014333",
      brooklyn: "40.710513, -73.940305",
      london: "51.5281613,-0.6619945",
      seoul: "37.575654,126.975786",
      melbourne: "-37.858901,145.074694",
      kyoto: "35.011081,135.758882",
      berlin: "52.527018,13.406480"
    }
    
    def fetch_places(location)
      options = {
        # query params...
      }
      # fetch a list of places
      resp = HTTParty.get(GOOGLE_PLACES_BASE_URI, options)
      results = resp.parsed_response["results"]  
    end
    
    def fetch_place_details(place_id)
      options = {
        # query params...
      }
      # fetch details for a particular place
      resp = HTTParty.get(GOOGLE_DETAILS_BASE_URI, options)
      results = resp.parsed_response["result"]
    end
end
```

**Home show page populated with data fetched from google**
![home-show](https://raw.githubusercontent.com/sksea/i/master/airbase-prod-readme/homes-show.png)

From project, I also got a taste of the importance of sanitizing data. When I tried to build addresses from responses, I realized that the Google Places API returned addresses in arrays of varying lengths. This pushed me to handle each locale differently.

`google_maps_helper.rb`
```ruby
module GoogleMapsHelper
  
  def parse_addr_comps(city_symbol, addr_comps)
      # Check address component array size
    if city_symbol.to_s.include?(NEW_YORK)
      if addr_comps.size < 8
        puts 'Fetched addr_comps incomplete, skipping'
        return
      end
      return [
        # build address from components
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
        # access addr_comps differently
      ]
    elsif city_symbol.to_s.include?(LONDON)
      if addr_comps.size < 6
        puts 'Fetched addr_comps incomplete, skipping'
        return
      end
      return [
        # access addr_comps differently
      ]
    end
    
end
```

### Managing state with redux and selectors

As my project grew, I found deeply nested components which needed pieces of state their ancestors did not care for. The pattern I found helpful for solving this is using selectors to mold a component's props into exactly a form that's clear and convenient to use. In the resulting component, it's clear with at a quick glance to `mapStateToProps` which slices of state that component has access to. This is much nicer than jumping through multiple to try and trace the flow of props, or even fiddling with the debugger.  Another takeaway from the following snippet is that component structure is best kept as flat as possible. Organization or components came be inferred from naming convention. Any more than one sublevel in `/components` results in an ugly trail of `../../..`, which makes reference other folders like selectors or actions awkward. This is something I will keep in mind for my next React project.

`VenueBooking.jsx`
```js
import { selectVenue } from '../../../selectors/venuesSelectors';
import { selectBookings, selectBookingsErrors } from '../../../selectors/bookingsSelectors';
import { selectGuestsDisplayed } from '../../../selectors/uiSelectors';
import { currentUser, currentUserBookings } from '../../../selectors/sessionSelectors';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {
    venue: selectVenue(state, id),
    bookings: selectBookings(state),
    selectGuestsDisplayed: selectGuestsDisplayed(state),
    errors: selectBookingsErrors(state),
    currentUser: currentUser(state),
    currentUserBookings: currentUserBookings(state),
  };
};
```

### Thin controllers and keeping logic with the appropriate owner

Checking a venue's availability for a user to place reservations prompts the question of where that logic should live. The first and most obvious place is in `BookingsController`, but here is already crowded with things like params and code to render responses, which are both different concerns than the actual query's business logic. The next stop would be to move it down to the `Venue` model, which leads to a cleaner controller. However, I realized a venue's availability only makes sense in the context of a new booking. We could get a reference of our current `venue` and try to pass in a new `booking` like `venue.is_valid?(booking)`, but that seems clunky. Ultimately, I settled on the solution below, which is place the logic in the `Booking` model. With coupling reduced between the two models, minimal changes need to be made to venues even if bookings is completely removed from this application.

`booking.rb`
```ruby
class Booking < ApplicationRecord
  validate :venue_available
  validate :booking_duration_valid
  
  belongs_to :user
  belongs_to :venue
  has_one :host, through: :venue
  
  private
  
  def venue_available
    venue_bookings = self.venue.bookings
    venue_bookings.any? do |vb|
      if vb.overlaps?(self)
        errors.add(:check_in, 'time is unavailable')
        break
      end
    end
  end
  
end
```