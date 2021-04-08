class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.datetime :due_date
      t.string :status
      t.string :description
      t.integer :assignee_id
      t.integer :project_id
      t.timestamps
    end
  end
end
