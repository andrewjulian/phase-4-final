class CoursesController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  skip_before_action :authorize, only: [:index]


  def create
    course = Course.create!(user_params)
    render json: course, include: :questions, status: :created
  end

  def show
    course = Course.find_by(id: params[:id])
    render json: course
  end

  def index
    courses = Course.all
    render json: courses
  end

  private

  def render_unprocessable_entity(invalid)
    render json:{error: invalid.record.errors}, status: :unprocessable_entity
  end

  def user_params()
    params.permit(:id, :course_name, :subject)
  end

end
