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
    # Search by ids
    if params[:id].present?
      @venues = Venue.where(id: params[:id])
    
    # Show random 
    elsif search_params_empty
      @venues = Venue.all

    # Searching by coords (used by GMaps)
    # coords must be provided in groups of 4
    elsif search_params[:coords].present?
      coords = search_params[:coords].split(',')
      if coords.length % 4 == 0 
        @venues = Venue.filter_by_coords(coords)
      else
        render json: 'Invalid bounds input', status: 422
      end

    # Searching by fields
    else
      @venues = Venue.all
      if search_params[:address].present?
        @venues = @venues.filter_by_address(search_params[:address])
      end
      if false # should_filter_by_availability
        # @venues = @venues.filter_by_availability(search_params) 
      end
      # this logic was for the show page, need to handle that too...
      # then maybe i should move it into the show route.
      # if search_params[:check_in].present? && search_params[:check_out].present?
      #   @venues = @venues.reject do |venue|
      #     b = Booking.new(
      #       venue_id: venue.id,
      #       check_in: search_params[:check_in],
      #       check_out: search_params[:check_out]
      #     )
      #     venue.bookings.any? { |booking| booking.overlaps?(b) }
      #   end
      # end
    end
    @venues = @venues.order("RANDOM()").limit(36).includes(:pictures)
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
      :address,
      :name,
      :street,
      :city,
      :state,
      :postal_code,
      :room_type,
      :price,
      :check_in,
      :check_out,
      :coords,
    )
  end
  
end
