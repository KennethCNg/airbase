class VenueAmenity < ApplicationRecord
  belongs_to :amenity
  belongs_to :venue
end
