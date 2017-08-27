class RevertCheckInOutToDateTime < ActiveRecord::Migration[5.1]
  def change
    remove_column :venues, :check_in, :time
    remove_column :venues, :check_out, :time
    add_column :venues, :check_in, :datetime, null: false
    add_column :venues, :check_out, :datetime, null: false
  end
end
