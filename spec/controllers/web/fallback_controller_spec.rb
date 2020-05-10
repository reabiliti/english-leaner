# frozen_string_literal: true

require 'rails_helper'

describe Web::FallbackController, type: :controller do
  describe '#index' do
    before { get :index }

    it 'returns http success' do
      expect(response).to have_http_status :success
    end
  end
end
