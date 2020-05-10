# frozen_string_literal: true

require 'rails_helper'

describe Api::V1::ThemeSerializer do
  subject(:theme_serialized) { JSON.parse(serialization.to_json) }

  let!(:theme) { create(:theme) }
  let(:serializer) { described_class.new(theme) }
  let(:serialization) { ActiveModelSerializers::Adapter.create(serializer) }
  let(:result) do
    {
      theme: {
        id: theme.id,
        name: theme.name
      }
    }.as_json
  end

  it { is_expected.to deep_equal result }
end
