class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :image_url, :open
end
