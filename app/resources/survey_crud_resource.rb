class SurveyCrudResource < ApplicationResource
  typelize_from Survey
  root_key :survey

  # one :user, resource: UserResource
  # has_one :user
  # has_one :language
  has_many :items, resource: Survey::ItemCrudResource

  attributes :id,
    :state,
    :question,
    :description,
    :slug

  typelize :state, nullabe: false

  typelize :string, nullable: true
  # attribute :parent_survey_item_value do |obj|
  #   obj.parent_survey_item&.value
  # end

  typelize_meta meta: "{ item_states: Record<string, unknown>[]}"
  meta do
    { item_states: Survey::Item.states }
  end
end
