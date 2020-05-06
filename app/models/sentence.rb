# frozen_string_literal: true

# == Schema Information
#
# Table name: sentences
#
#  id         :bigint           not null, primary key
#  english    :string           not null
#  russian    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Sentence < ApplicationRecord
  validates :english, :russian, presence: true

  has_many :sentence_themes, dependent: :destroy
  has_many :themes, through: :sentence_themes
end
