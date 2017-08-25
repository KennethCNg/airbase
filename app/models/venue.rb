class Venue < ApplicationRecord
  
  validates 
    :host_id,
    :accommodates,
    :bathrooms, 
    :bedrooms,
    :beds,
    :property_type,
    :room_type, 
    :visit_count, 
    :lat,
    :lon,
    :price
    presence: true
  
  belongs_to :host, class_name: 'User'
  has_many :venue_amenities
  has_many :amenities, through: :venue_amenities
  
end
