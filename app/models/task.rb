# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  due_date    :datetime
#  status      :string
#  description :string
#  assignee_id :integer
#  project_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Task < ApplicationRecord
    validates :name, presence: true

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project
end
