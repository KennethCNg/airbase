class RemoveSelectedAddressNoNullRequirements < ActiveRecord::Migration[5.1]
  def change
    change_column_null :venues, :state, true
    change_column_null :venues, :postal_code, true
    change_column_null :venues, :country, true
  end
end
