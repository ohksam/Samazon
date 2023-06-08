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
    patch '/cart_items', to: 'cart_items#checkout'
    resources :reviews, except: [:new, :edit]
  end

  get '*path', to: "static_pages#frontend_index"
end
