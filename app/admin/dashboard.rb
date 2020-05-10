# frozen_string_literal: true

ActiveAdmin.register_page 'Dashboard' do
  menu priority: 1, label: proc { I18n.t('active_admin.dashboard') }

  content title: proc { I18n.t('active_admin.dashboard') } do
    columns do
      column do
        panel 'CSV Uploads for Sentences' do
          ul do
            render 'admin/dashboard/import_sentences'
          end
        end
      end
    end
  end

  page_action :import_sentences, method: :post do
    file_path = params[:file]&.path
    if file_path
      sentences_csv = CSV.open(file_path, headers: true, header_converters: :symbol, col_sep: '|').map(&:to_h)
      SentenceTheme.delete_all
      Theme.delete_all
      Sentence.delete_all

      sentences_csv.each do |sentence_csv|
        sentence_params = sentence_csv.slice(:russian, :english)
        theme = Theme.where(name: sentence_csv[:theme]).first_or_create!
        sentence = Sentence.create!(sentence_params)
        sentence.themes << theme
      end
    end

    redirect_to admin_dashboard_path
  end
end
