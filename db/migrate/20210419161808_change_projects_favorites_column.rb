class ChangeProjectsFavoritesColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :projects, :favorite, :boolean, :default => false
  end
end
