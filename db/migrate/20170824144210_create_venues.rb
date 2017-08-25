class CreateVenues < ActiveRecord::Migration[5.1]
  def change
    create_table :venues do |t|
      
      t.integer :owner_id, null: false
      t.integer :accommodates, null: false
      t.integer :bathrooms, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.string  :property_type, null: false
      t.string  :room_type, null: false
      t.integer :visit_count
      
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :postal_code
      t.float :lat, null: false
      t.float :lon, null: false
      
      t.integer :minimum_stay
      t.string :check_in_type
      t.time :check_in
      t.time :check_out
      
      t.integer :price, null: false
      t.integer :extra_person_cost
      t.integer :extra_person_threshold
      t.integer :cleaning_fee
      t.integer :security_deposit
      t.integer :weekend_price      
      t.float :weekly_discount
      t.float :monthly_discount
      
      t.string :pets
      
      t.text :description_about
      t.text :description_space
      t.text :description_guest_access
      t.text :description_guest_interaction
      t.text :description_other_notes
      
      t.index :owner_id
      t.index :accommodates
      t.index :bathrooms
      t.index :bedrooms
      t.index :beds
      t.index :price
      
      t.timestamps
    end
    
  end
end
