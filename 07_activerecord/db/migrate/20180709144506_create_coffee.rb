class CreateCoffee < ActiveRecord::Migration[5.0]
  def change
    create_table :coffees do |t|
      t.string :blend_name
      t.string :style
      t.integer :strength
    end
  end
end
