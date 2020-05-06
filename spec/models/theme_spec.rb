# frozen_string_literal: true

require 'rails_helper'

describe Theme, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of :name }
  end

  describe 'relations' do
    it { is_expected.to have_many :sentence_themes }
    it { is_expected.to have_many :sentences }
  end
end
