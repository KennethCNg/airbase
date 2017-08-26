class UpdateVenueTable < ActiveRecord::Migration[5.1]
  def change
    
    change_column :venues, :visit_count, :integer, default: 0
    change_column_null :venues, :name, false
    change_column_null :venues, :street, false
    change_column_null :venues, :city, false
    change_column_null :venues, :state, false
    add_index :venues, :name
    add_index :venues, :street
    add_index :venues, :city
    add_index :venues, :state
    
  end
end
