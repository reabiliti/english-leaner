# frozen_string_literal: true

ActiveAdmin.register Sentence do
  permit_params :russian, :english

  # permit_params do
  #   permitted = [:russian, :english]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
