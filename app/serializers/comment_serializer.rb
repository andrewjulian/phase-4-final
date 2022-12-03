class CommentSerializer < ActiveModel::Serializer
  belongs_to :question
  attributes :id, :question_id, :response
end
