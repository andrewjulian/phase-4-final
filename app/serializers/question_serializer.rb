class QuestionSerializer < ActiveModel::Serializer

  belongs_to :user

  attributes :id, :title, :details, :image_url, :open
end
