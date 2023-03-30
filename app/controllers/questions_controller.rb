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
    user = User.find_by(id: session[:user_id])
    question = user.questions.find_by(id: params[:id])
    if question
      question.update(question_params)
      render json: question
    else 
      render json: { error: "Review not found" }, status: :not_found
    end
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    question = user.questions.find_by(id: params[:id])
    if question
      question.destroy
      render json: question
    else 
      render json: { error: "Question not found" }, status: :not_found
    end
  end

  def mycoursequestions
    user = User.find_by(id: session[:user_id])
    course = user.courses.find_by(course_name: params[:course_name])
    myquestions = user.questions
    listofcoursequestions = myquestions.where("course_id = ?", course.id)
    render json: listofcoursequestions    
  end


  private

  def question_params
    params.permit(:id, :title, :details, :course_id, :open)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: ["Invalid Data"] }, status: :unprocessable_entity
  end
  
end
