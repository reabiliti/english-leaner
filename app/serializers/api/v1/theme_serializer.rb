# frozen_string_literal: true

module Api
  module V1
    class ThemeSerializer < Api::V1::BaseSerializer
      type :theme

      attributes :id, :name
    end
  end
end
