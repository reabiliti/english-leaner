# frozen_string_literal: true

Rails.application.routes.draw do
  ActiveAdmin.routes(self)
  namespace :api do
    namespace :v1 do
      resource :random_sentences, only: :show
    end
  end

  namespace :web do
    resources :fallback, only: :index
  end

  get '*path', to: 'web/fallback#index', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
