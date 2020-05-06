# frozen_string_literal: true

require 'rails_helper'

describe SentenceTheme, type: :model do
  describe 'relations' do
    it { is_expected.to belong_to :sentence }
    it { is_expected.to belong_to :theme }
  end
end
