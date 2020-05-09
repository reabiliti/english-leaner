# frozen_string_literal: true

module Api
  module V1
    class BaseController < ApplicationController
      private

      def not_found_request
        render json: { success: false, error: 'Not found' }, status: :not_found
      end
    end
  end
end
