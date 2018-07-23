class Pizza < ApplicationRecord
  belongs_to :store

  validates :name, :price, :store_id, :pizza_type, presence: true
  validates :price, numericality: true
end
