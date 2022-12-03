class QuestionSerializer < ActiveModel::Serializer
  belongs_to :user
  has_many :comments
  attributes :id, :title, :details, :open
end
