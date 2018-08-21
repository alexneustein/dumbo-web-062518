class Taco < ApplicationRecord
  has_many :taco_ingredients
  has_many :ingredients, through: :taco_ingredients
  enum shell: [ :hard, :soft, :dorito, :pita ]

  # def ingredient_names
  #   self.ingredients.map(&:name)
  # end
end
