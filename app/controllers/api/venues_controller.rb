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

    # Search by geogaphical coordinates.
    elsif search_params[:ne].present? && search_params[:sw].present?
      @venues = Venue.filter_by_coords(
                  search_params[:sw],
                  search_params[:ne]
                )

    # Search by fields
    else
      @venues = Venue.all
      if search_params[:address].present?
        @venues = @venues.filter_by_address(search_params[:address])
      end
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
      :ne,
      :sw,
    )
  end
  
end
