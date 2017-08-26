class Amenity < ApplicationRecord
  
  TV = 'tv'.freeze
  KITCHEN = 'kitchen'.freeze
  INTERNET = 'internet'.freeze
  WASHER = 'washer'.freeze
  DRYER = 'dryer'.freeze
  AC = 'air conditioning'.freeze
  POOL = 'pool'.freeze
  
  AMENITY_NAMES = [
    TV,
    KITCHEN,
    INTERNET,
    WASHER,
    DRYER,
    AC,
    POOL
  ].freeze
  
  GENERAL = 'general'.freeze
  FAMILY = 'family'.freeze
  
  AMENITY_TYPES = [
    GENERAL,
    FAMILY
  ].freeze
  
  validates :name, presence: true
  validates :type, presence: true
  
  has_many :venue_amenities
  has_many :venues, through: :venue_amenities
  
end
