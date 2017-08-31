class RemoveNullRequirementOnPostalCode < ActiveRecord::Migration[5.1]
  def change
    change_column_null :venues, :postal_code, true
  end
end
