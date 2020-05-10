# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::SentenceSerializer do
  subject(:sentence_serialized) { JSON.parse(serialization.to_json) }

  let!(:sentence) { create(:sentence, english: 'english', russian: 'russian') }
  let(:serializer) { described_class.new(sentence) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer) }

  context 'without themes' do
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

    it { is_expected.to deep_equal result }
  end

  context 'when sentence has theme' do
    let!(:theme) { create(:theme, name: 'new', sentences: [sentence]) }

    let(:result) do
      {
        sentence: {
          id: sentence.id,
          russian: sentence.russian,
          english: sentence.english,
          themes: [{ id: theme.id, name: theme.name }]
        }
      }.as_json
    end

    it { is_expected.to deep_equal result }
  end
end
