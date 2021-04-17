Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :projects, except: [:new, :edit] do
      resources :tasks, except: [:new, :edit]
    end

  end

  root to: "static_pages#root"
end


