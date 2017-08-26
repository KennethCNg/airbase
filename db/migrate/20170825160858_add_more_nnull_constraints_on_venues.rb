class AddMoreNnullConstraintsOnVenues < ActiveRecord::Migration[5.1]
  def change
    
    change_column_null :venues, :check_in, false
    change_column_null :venues, :check_out, false
    change_column_null :venues, :postal_code, false
    
  end
end
