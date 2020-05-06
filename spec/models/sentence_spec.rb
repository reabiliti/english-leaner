# frozen_string_literal: true

require 'rails_helper'

describe Sentence, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of :english }
    it { is_expected.to validate_presence_of :russian }
  end

  describe 'relations' do
    it { is_expected.to have_many :sentence_themes }
    it { is_expected.to have_many :themes }
  end
end
