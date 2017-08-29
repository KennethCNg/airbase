class AddCountryToVenue < ActiveRecord::Migration[5.1]
  def up
    add_column :venues, :country, :string, null: false
    add_index :venues, :country
  end
  
  def down
    remove_column :venues, :country, :string
  end
end
