class Question < ApplicationRecord

  belongs_to :user
  belongs_to :course
  has_many :comments

  validates :title, presence: true
  validates :details, presence: true
  
end
