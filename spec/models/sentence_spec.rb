# frozen_string_literal: true

require 'rails_helper'

describe Sentence, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of :english }
    it { is_expected.to validate_presence_of :russian }
  end
end
