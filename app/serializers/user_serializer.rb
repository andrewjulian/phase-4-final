class UserSerializer < ActiveModel::Serializer
  has_many :questions
  has_many :courses, through: :questions

  attributes :id, :username, :display_name
end
