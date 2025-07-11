# == Schema Information
#
# Table name: language_category_items
#
#  id                       :bigint           not null, primary key
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  language_category_id     :bigint           not null
#  language_landing_page_id :bigint           not null
#
# Indexes
#
#  index_language_category_items_on_language_category_id      (language_category_id)
#  index_language_category_items_on_language_landing_page_id  (language_landing_page_id)
#
# Foreign Keys
#
#  fk_rails_...  (language_category_id => language_categories.id)
#  fk_rails_...  (language_landing_page_id => language_landing_pages.id)
#
FactoryBot.define do
  factory :language_category_item, class: "Language::Category::Item" do
    language_category { nil }
    language_landing_page { nil }
  end
end
