class CreatePictures < ActiveRecord::Migration[5.1]
  def change
    create_table :pictures do |t|
      t.integer :user_id, null: false
      t.index :user_id
      t.string :fallback_url
      t.timestamps
    end
  end
end
 