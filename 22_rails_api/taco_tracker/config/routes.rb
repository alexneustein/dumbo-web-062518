Rails.application.routes.draw do
  resources :taco_ingredients
  resources :ingredients
  resources :tacos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
