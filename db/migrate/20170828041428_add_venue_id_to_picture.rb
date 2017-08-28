class AddVenueIdToPicture < ActiveRecord::Migration[5.1]
  def change
    add_column :pictures, :venue_id, :integer, null: false
    add_index :pictures, :venue_id
  end
end
