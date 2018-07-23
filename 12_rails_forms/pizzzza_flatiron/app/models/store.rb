class Store < ApplicationRecord
  has_many :pizzas
  validates :name, uniqueness: true
  validates :location, uniqueness: true
end
