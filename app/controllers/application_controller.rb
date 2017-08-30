class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.reset_session_token! if current_user
    session[:session_token] = nil
  end

  def user_params
    params.require(:user).permit(:email, :password, :firstname, :lastname)
  end
  
  # def present_params
  #   params.reject{ |k, v| v.blank? || ["controller", "action", "format"].include?(k) }
  # end

end
