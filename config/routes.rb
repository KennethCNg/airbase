Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    get 'users/:user_id/bookings', to: 'bookings#index'
    resources :users, only: [:index, :create, :show]
    
    get 'venues/:venue_id/bookings', to: 'bookings#index'
    get 'venues/:venue_id/reviews', to: 'reviews#index'
    resources :venues, only: [:create, :index, :show]
    
    resources :bookings, only: [:create]
    resources :reviews, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  
end
