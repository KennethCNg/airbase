class ChangePictureAssocsToPolymorphic < ActiveRecord::Migration[5.1]
  def up
    remove_column :pictures, :user_id, :integer
    remove_column :pictures, :venue_id, :integer
    add_column :pictures, :imageable_id, :integer, null: false
    add_index :pictures, :imageable_id
  end
  
  def down
    add_column :pictures, :user_id, :integer, null: false
    add_column :pictures, :venue_id, :integer, null: false
    remove_column :pictures, :imageable_id, :integer
  end
end
