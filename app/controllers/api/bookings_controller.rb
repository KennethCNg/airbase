class Api::BookingsController < ApplicationController
  
  def index
    # for searching bookings by venue only.
    if params[:user_id].present?
      @bookings = Booking.where(user_id: params[:user_id])
    elsif params[:venue_id].present?
      @bookings = Booking.where(venue_id: params[:venue_id])
    end
    render :index
  end
  
  def create
    params = booking_params.dup
    params[:check_in] = Time.strptime(booking_params[:check_in], "%m/%d/%Y") if booking_params[:check_in]
    params[:check_out] = Time.strptime(booking_params[:check_out], "%m/%d/%Y") if booking_params[:check_out]
    @booking = Booking.new(params)
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
