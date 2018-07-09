class CreatePatients < ActiveRecord::Migration[5.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.integer :dob
      t.string :ailment
      t.string :allergy
    end
  end
end
