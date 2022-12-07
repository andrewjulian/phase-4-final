class CourseSerializer < ActiveModel::Serializer
  attributes :id, :course_name, :subject, :questions

  has_many :questions
  has_many :users, through: :questions
end
