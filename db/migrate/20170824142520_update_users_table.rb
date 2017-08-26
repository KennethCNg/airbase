class UpdateUsersTable < ActiveRecord::Migration[5.1]
  def change
    change_table(:users) do |t|
      t.change :email, :string, null: false
      t.index :email
    end
  end
end
