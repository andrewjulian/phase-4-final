class User < ApplicationRecord

  has_secure_password

  validates :username, presence: true
  validates :username, uniqueness: true

  has_many :questions
  has_many :courses, -> { distinct }, through: :questions
  
end
