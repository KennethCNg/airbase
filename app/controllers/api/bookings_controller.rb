class Api::BookingsController < ApplicationController
  
  def index
    # for searching bookings by venue only.
    @bookings = Booking.where(venue_id: params[:venue_id])
    render :index
  end
  
  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end
  
  private
  
  def booking_params
    params.require(:booking).permit(:venue_id, :user_id,
     :check_in, :check_out)
  end
  
end
