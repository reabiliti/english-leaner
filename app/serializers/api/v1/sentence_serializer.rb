# frozen_string_literal: true

module Api
  module V1
    class SentenceSerializer < Api::V1::BaseSerializer
      type :sentence

      attributes :id, :english, :russian

      has_many :themes, serializer: Api::V1::ThemeSerializer
    end
  end
end
