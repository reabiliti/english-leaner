# frozen_string_literal: true

# == Schema Information
#
# Table name: sentence_themes
#
#  id          :bigint           not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  sentence_id :bigint
#  theme_id    :bigint
#
# Indexes
#
#  index_sentence_themes_on_sentence_id  (sentence_id)
#  index_sentence_themes_on_theme_id     (theme_id)
#
# Foreign Keys
#
#  fk_rails_...  (sentence_id => sentences.id)
#  fk_rails_...  (theme_id => themes.id)
#
FactoryBot.define do
  factory :sentence_theme do
  end
end
