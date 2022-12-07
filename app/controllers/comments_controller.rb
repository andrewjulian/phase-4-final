class CommentsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  def index
    comments = Comment.all
    render json: comment
  end

  private

  def comment_params
    params.permit(:id, :question_id, :response)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: ["Invalid Data"] }, status: :unprocessable_entity
  end
end
