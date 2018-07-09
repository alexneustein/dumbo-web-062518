class CreateDoctors < ActiveRecord::Migration[5.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.integer :dob
      t.string :specialty
    end
  end

  # def up
  # end

  # def down
  # end
end
