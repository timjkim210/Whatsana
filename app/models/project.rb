# == Schema Information
#
# Table name: projects
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text
#  status      :string
#  due_date    :datetime
#  view        :string
#  owner_id    :integer
#  team_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Project < ApplicationRecord
    validates :name, presence: true

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

    has_many :tasks,
    foreign_key: :project_id,
    class_name: :Task 
end
