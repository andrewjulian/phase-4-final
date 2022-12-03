class UserSerializer < ActiveModel::Serializer
  has_many :questions
  attributes :id, :username, :display_name
end
