class ChangeVenueDateTimeAttributeNames < ActiveRecord::Migration[5.1]
  def change
    rename_column :venues, :check_in, :listing_start
    rename_column :venues, :check_out, :listing_stop
  end
end
