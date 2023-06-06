Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # get 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:show, :index]
    resources :cart_items, except: [:new, :edit, :show]
    patch 'api/cart_items', to: 'cart_items#checkout'
    #maybe not api?
  end

end
