require "application_system_test_case"

class TacoIngredientsTest < ApplicationSystemTestCase
  setup do
    @taco_ingredient = taco_ingredients(:one)
  end

  test "visiting the index" do
    visit taco_ingredients_url
    assert_selector "h1", text: "Taco Ingredients"
  end

  test "creating a Taco ingredient" do
    visit taco_ingredients_url
    click_on "New Taco Ingredient"

    fill_in "Ingredient", with: @taco_ingredient.ingredient_id
    fill_in "Taco", with: @taco_ingredient.taco_id
    click_on "Create Taco ingredient"

    assert_text "Taco ingredient was successfully created"
    click_on "Back"
  end

  test "updating a Taco ingredient" do
    visit taco_ingredients_url
    click_on "Edit", match: :first

    fill_in "Ingredient", with: @taco_ingredient.ingredient_id
    fill_in "Taco", with: @taco_ingredient.taco_id
    click_on "Update Taco ingredient"

    assert_text "Taco ingredient was successfully updated"
    click_on "Back"
  end

  test "destroying a Taco ingredient" do
    visit taco_ingredients_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Taco ingredient was successfully destroyed"
  end
end
