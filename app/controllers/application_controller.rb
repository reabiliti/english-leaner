# frozen_string_literal: true

# Changed from ActionController::API for active admin
class ApplicationController < ActionController::Base
  private

  def authenticate_admin_user!
    authenticate_or_request_with_http_basic('Whatever') do |name, password|
      name == ENV['ACTIVEADMIN_USER_NAME'] && password == ENV['ACTIVEADMIN_USER_PASSWORD']
    end
  end
end
