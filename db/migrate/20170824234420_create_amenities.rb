class CreateAmenities < ActiveRecord::Migration[5.1]
  def change
    create_table :amenities do |t|
      
      t.string :name, null: false
      t.string :type, null: false
      
      t.index :name
      t.index :type      
      
      t.timestamps
    end

  end
end
