class UserSerializer < ActiveModel::Serializer

  has_many :questions

  attributes :id, :username, :image_url, :display_name

end
