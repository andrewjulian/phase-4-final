Rails.application.routes.draw do
  
  resources :comments
  resources :courses
  resources :questions
  resources :users

  post "/login", to: "sessions#create"
  post "/users", to: "users#create"
  get "/auth", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/courseList", to: "users#showCourses"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
