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
    if search_params.empty?
      @venues = Venue.all.includes(:pictures)
    else
      @venues = Venue.search_by_address(search_params).includes(:pictures)
      # @venues = Venue.search_by_params(search_params).includes(:pictures)
    end
    render :index
  end
  
  def show
    @venue = Venue.find_by(id: params[:id])
    render :show
  end
  
  private
  
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
      :price
    )
  end
  
end
