class Picture < ApplicationRecord
  # TODO: this model needs to change because its associations
  # implies a relationship between a user and venue through
  # this image. Look into polymorphic assocs or concerns.
  
  has_attached_file :image, default_url: 'building.jpg'
  validates :image, attachment_presence: true
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  
  belongs_to :imageable, polymorphic: true
end
