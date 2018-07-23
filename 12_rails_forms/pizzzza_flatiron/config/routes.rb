Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :stores, only: [:index, :show, :new, :create, :edit]
  resources :pizzas, only: [:new, :create]
end
