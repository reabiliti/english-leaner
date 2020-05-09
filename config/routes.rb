Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resource :random_sentences, only: :show
    end
  end
end
