class Venue < ApplicationRecord
  include PgSearch
  pg_search_scope :search_by_address, against: [
    :name, 
    :street,
    :city,
    :state,
    :country,
    :postal_code
  ]
  
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
  
  
  ENTIRE = 'entire place/apt'.freeze
  PRIVATE = 'private room'.freeze
  SHARED = 'shared room'.freeze
  
  ROOM_TYPES = [
    ENTIRE,
    PRIVATE,
    SHARED
  ]
  
  validates :host_id, presence: true
  validates :accommodates, presence: true
  validates :bathrooms,  presence: true
  validates :bedrooms, presence: true
  validates :beds, presence: true
  validates :property_type, presence: true
  validates :room_type,  presence: true
  validates :visit_count,  presence: true
  validates :lat, presence: true
  validates :lng, presence: true
  validates :name, presence: true
  validates :street, presence: true
  validates :city, presence: true
  # validates :state, presence: true
  # validates :country, presence: true
  # validates :postal_code, presence: true
  validates :listing_start, presence: true
  validates :listing_stop, presence: true
  validates :price, presence: true
  
  belongs_to :host, class_name: 'User'
  has_many :venue_amenities
  has_many :amenities, through: :venue_amenities
  has_many :pictures, as: :imageable, dependent: :destroy
  has_many :bookings
  
  # returns activerecord relation
  def self.search_by_params(params)
    query = self
    query = query.where("name like ?", "%#{params[:name]}%") if params[:name]
    query = query.where("street like ?", "%#{params[:street]}%") if params[:street]
    query = query.where("city like ?", "%#{params[:city]}%") if params[:city]
    query = query.where("state like ?", "%#{params[:state]}%") if params[:state]
    query = query.where("country like ?", "%#{params[:country]}%") if params[:country]
    query = query.where("postal_code = ?", "%#{params[:postal_code]}%") if params[:postal_code]
    query = query.where("room_type = ?", "%#{params[:room_type]}%") if params[:room_type]
    query = query.where("price <= ?", "%#{params[:price]}%") if params[:price]
    return query
  end
  
  def self.search_by_availability(params)
    
  end
    
end
