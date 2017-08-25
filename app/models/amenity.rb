class Amenity < ApplicationRecord
  
  has_many :venue_amenities
  has_many :venues, through: :venue_amenities
  
end
