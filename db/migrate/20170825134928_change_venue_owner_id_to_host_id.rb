class ChangeVenueOwnerIdToHostId < ActiveRecord::Migration[5.1]
  def change
    rename_column :venues, :owner_id, :host_id
  end
end
