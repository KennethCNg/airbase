class Venue < ApplicationRecord
  
  APARTMENT = 'apartment'.freeze
  CONDOMINIUM = 'condominium'.freeze
  HOUSE = 'house'.freeze
  VACATION_HOME = 'vacation home'.freeze
  
  PROPERTY_TYPES = [
    APARTMENT,
    CONDOMINIUM,
    HOUSE,
    VACATION_HOME
  ].freeze
  
  validates :host_id, presence: true
  validates :accommodates, presence: true
  validates :bathrooms,  presence: true
  validates :bedrooms, presence: true
  validates :beds, presence: true
  validates :property_type, presence: true
  validates :room_type,  presence: true
  validates :visit_count,  presence: true
  validates :lat, presence: true
  validates :lon, presence: true
  validates :name, presence: true
  validates :street, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :postal_code, presence: true
  
  belongs_to :host, class_name: 'User'
  has_many :venue_amenities
  has_many :amenities, through: :venue_amenities
  
end
