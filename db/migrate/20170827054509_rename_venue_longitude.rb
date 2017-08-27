class RenameVenueLongitude < ActiveRecord::Migration[5.1]
  def change
    rename_column :venues, :lon, :lng
  end
end
