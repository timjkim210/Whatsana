class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description
      t.string :status
      t.datetime :due_date
      t.string :view
      t.integer :owner_id
      t.integer :team_id

      t.timestamps
    end
  end
end
