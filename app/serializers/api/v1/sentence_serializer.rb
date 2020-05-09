# frozen_string_literal: true

module Api
  module V1
    class SentenceSerializer < Api::V1::BaseSerializer
      type :sentence

      attributes :id, :english, :russian
    end
  end
end
