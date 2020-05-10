# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::RandomSentencesController, type: :controller do
  describe '#show' do
    context 'when doesnt have any sentences' do
      let(:result) do
        {
          success: false,
          error: 'Not found'
        }.as_json
      end

      before { get :show }

      it 'returns http not_found' do
        expect(response).to have_http_status :not_found
      end

      it 'return json' do
        expect(response.body).to look_like_json
      end

      it 'return result' do
        expect(body_as_json).to eq result
      end
    end

    context 'when has sentences' do
      let!(:sentence) { create(:sentence) }
      let(:result) do
        {
          sentence: {
            id: sentence.id,
            russian: sentence.russian,
            english: sentence.english,
            themes: []
          }
        }.as_json
      end

      before { get :show }

      it 'returns http success' do
        expect(response).to have_http_status :success
      end

      it 'return json' do
        expect(response.body).to look_like_json
      end

      it 'return result' do
        expect(body_as_json).to eq result
      end
    end
  end
end
