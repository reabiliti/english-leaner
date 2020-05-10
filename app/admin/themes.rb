# frozen_string_literal: true

ActiveAdmin.register Theme do
  permit_params :name

  # permit_params do
  #   permitted = [:name]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
end
