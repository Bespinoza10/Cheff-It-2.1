Rails.application.routes.draw do

  devise_for :admins
  devise_for :users
  resources :recipes

  root "welcome#index"

end
