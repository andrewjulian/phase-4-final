class Course < ApplicationRecord
  validates :course_name, presence: true
  validates :course_name, uniqueness: true
  validates :subject, presence: true
end
