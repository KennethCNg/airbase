class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :venue_id, null: false
      t.integer :user_id, null: false
      t.index :venue_id
      t.index :user_id
      t.datetime :check_in
      t.datetime :check_out
      t.timestamps
    end
  end
end
