class Api::VenuesController < ApplicationController
  
  def create
    @venue = Venue.new(venue_params)
    if @venue.save
      render :show
    else
      render json: @venue.errors.full_messages, status: 422
    end
  end
  
  def index
    if search_params_empty
      @venues = Venue.order("RANDOM()").limit(36).includes(:pictures)
    elsif should_search_by_coords
      @venues = Venue
        .where('lat > ?', search_params[:lat_min])
        .where('lat < ?', search_params[:lat_max])
        .where('lng > ?', search_params[:lng_min])
        .where('lng < ?', search_params[:lng_max])
    elsif should_search_by_address
      # check this out later, not sure how it's even working.
      debugger
      if search_params[:check_in].present? && search_params[:check_out].present?
        @venues = @venues.reject do |venue|
          b = Booking.new(
            venue_id: venue.id,
            check_in: search_params[:check_in],
            check_out: search_params[:check_out]
          )
          venue.bookings.any? { |booking| booking.overlaps?(b) }
        end
      end
    end
    render :index
  end
  
  def show
    @venue = Venue.find_by(id: params[:id])
    render :show
  end
  
  private
  
  def search_params_empty
    search_params.reject{|_, v| v.blank?}.empty?
  end

  def should_search_by_coords
    [ :lat_max, :lat_min, :lng_max, :lng_min ].all? { |key| search_params[key].present? }
  end

  def should_search_by_address
    search_params[:street].present?
  end
  
  def venue_params
    params.require(:venue).permit(
      :host_id,
      :accommodates,
      :bathrooms,
      :bedrooms,
      :beds,
      :property_type,
      :room_type,
      :name,
      :street,
      :city,
      :state,
      :postal_code,
      :lat,
      :lon,
      :minimum_stay,
      :check_in_type,
      :listing_start,
      :listing_stop,
      :price,
      :extra_person_cost,
      :extra_person_threshold,
      :cleaning_fee,
      :security_deposit,
      :weekend_price,
      :weekly_discount,
      :monthly_discount,
      :pets,
      :description_about,
      :description_space,
      :description_guest_access,
      :description_guest_interaction,
      :description_other_notes
    )
  end
  
  def search_params
    params.permit(
      :name,
      :street,
      :city,
      :state,
      :postal_code,
      :room_type,
      :price,
      :check_in,
      :check_out,
      :lat_max,
      :lat_min,
      :lng_max,
      :lng_min
    )
  end
  
end
