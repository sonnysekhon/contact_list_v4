class EditTables < ActiveRecord::Migration
  def change
    rename_column :contacts, :lastnama, :lastname
  end
end
