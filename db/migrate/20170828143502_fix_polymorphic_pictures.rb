class FixPolymorphicPictures < ActiveRecord::Migration[5.1]  
  def up
    change_table :pictures do |t|
      t.remove :imageable_id
      t.references :imageable, polymorphic: true, index: true
    end
  end

  def down
    change_table :pictures do |t|
      t.column :imageable_id, :integer, null: false
      t.remove_references :imageable, polymorphic: true
    end
  end
end
