class QuestionsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    questions = Question.all
    render json: questions, include: :user, include: :comments
  end

  def create
    user = User.find_by(id: session[:user_id])
    question = user.questions.create!(question_params)
    render json: question, include: :user, include: :comments, status: :created
  end

  def update
    question = Question.find_by(id: params[:id])
    if question.user_id === user.id
      question.update(question_params)
      render json: question
    else
      render json: { error: "Not your review!" }, status: :unprocessable_entity
    end
  end

  def destroy
    question = Question.find_by(id: params[:id])
    question.destroy
    render json: question
  end

  private

  def question_params
    params.permit(:id, :title, :details, :course_id, :open)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: ["Invalid Data"] }, status: :unprocessable_entity
  end
  
end
