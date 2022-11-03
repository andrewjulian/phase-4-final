class Comment < ApplicationRecord
  validates :response, presence: true
end
