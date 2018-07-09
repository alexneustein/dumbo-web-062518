class AddCoffeeIdToDoctors < ActiveRecord::Migration[5.0]
  def change
    add_column :doctors, :coffee_id, :integer
  end
end
