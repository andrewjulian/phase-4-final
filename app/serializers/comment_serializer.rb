class CommentSerializer < ActiveModel::Serializer
  
  belongs_to :question
  
  attributes :id, :response
end
