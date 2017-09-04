class Api::UsersController < ApplicationController
  
  def index
    @users = User.where(id: params[:user_ids])
    render :index
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def show
    @user = User.find_by(id: params[:id])
    render :show
  end
  
  private
  
  def search_params
    params.permit(
      :user_ids
    )
  end
  
end
