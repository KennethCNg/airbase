class RemoveNullRequirementFromPictures < ActiveRecord::Migration[5.1]
  def change
    change_column_null :pictures, :venue_id, true
    change_column_null :pictures, :user_id, true
  end
end
