# frozen_string_literal: true

class CreateSentenceThemes < ActiveRecord::Migration[6.0]
  def change
    create_table :sentence_themes do |t|
      t.references :sentence, foreign_key: true
      t.references :theme, foreign_key: true

      t.timestamps
    end
  end
end
