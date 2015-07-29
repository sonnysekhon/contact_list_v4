class CreateTables < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string      :firstname
      t.string      :lastnama
      t.string      :email
      t.string      :phone
      t.timestamps  null: true
    end
  end
end
