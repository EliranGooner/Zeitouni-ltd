Rails.application.routes.draw do
  root to: 'pages#home'
  get 'projects', to: 'projects#index'
  get 'projects/:id', to: 'projects#show'
  get 'about', to: "pages#about"
  get 'avi', to: "pages#avi"
  get 'contact', to: "pages#contact"
  get 'articles', to: "pages#articles"
end
