class TacoSerializer < ActiveModel::Serializer
  attributes :id, :name, :shell
  has_many :ingredients, serializer: IngredientSerializer

  def ingredient_names
    object.ingredients.map(&:name)
  end
end
