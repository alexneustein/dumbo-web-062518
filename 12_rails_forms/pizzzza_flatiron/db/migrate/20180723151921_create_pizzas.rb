class CreatePizzas < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.string :pizza_type
      t.integer :price
      t.integer :store_id

      t.timestamps
    end
  end
end
