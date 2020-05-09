# frozen_string_literal: true

module Api
  module V1
    class RandomSentencesController < Api::V1::BaseController
      def show
        random_sentence = Sentence.order('RANDOM()').first

        return not_found_request unless random_sentence

        render json: random_sentence, serializer: Api::V1::SentenceSerializer, status: :ok
      end
    end
  end
end
