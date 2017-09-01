class Api::ReviewsController < ApplicationController
    
  def index
    # debugger
    @reviews = Review.where(venue_id: params[:venue_id])
    render :index
  end
  
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end
  
  private
  
  def review_params
    params.require(:review).permit(:venue_id, :user_id,
     :rating, :body)
  end
    

end
