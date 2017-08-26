class CreateVenueAmenities < ActiveRecord::Migration[5.1]
  def change
    create_table :venue_amenities do |t|
      
      t.integer :venue_id, null: false
      t.integer :amenity_id, null: false
      
      t.index :venue_id
      t.index :amenity_id

      t.timestamps
    end
  end
end
