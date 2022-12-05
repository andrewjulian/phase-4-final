class QuestionSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :course
  has_many :comments
  attributes :id, :title, :details, :open, :course_id
end
