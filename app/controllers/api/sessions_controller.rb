class Api::SessionsController < ApplicationController
  def create
    @user = User.find_user_by_credentials(user_params[:email], user_params[:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      errors = ['Invalid credentials']
      render json: errors, status: 401
    end

  end

  def destroy
    if current_user
      logout!
      if session[:session_token].nil?
        render json: {}
        return
      end
    end
    render json: ["No user is currently logged in"], status: 404
  end

end
