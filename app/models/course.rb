class Course < ApplicationRecord
  
  validates :course_name, presence: true
  validates :course_name, uniqueness: true
  validates :subject, presence: true

  has_many :questions
  has_many :users, through: :questions

end
