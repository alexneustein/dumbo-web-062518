require 'test_helper'

class TacoIngredientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @taco_ingredient = taco_ingredients(:one)
  end

  test "should get index" do
    get taco_ingredients_url
    assert_response :success
  end

  test "should get new" do
    get new_taco_ingredient_url
    assert_response :success
  end

  test "should create taco_ingredient" do
    assert_difference('TacoIngredient.count') do
      post taco_ingredients_url, params: { taco_ingredient: { ingredient_id: @taco_ingredient.ingredient_id, taco_id: @taco_ingredient.taco_id } }
    end

    assert_redirected_to taco_ingredient_url(TacoIngredient.last)
  end

  test "should show taco_ingredient" do
    get taco_ingredient_url(@taco_ingredient)
    assert_response :success
  end

  test "should get edit" do
    get edit_taco_ingredient_url(@taco_ingredient)
    assert_response :success
  end

  test "should update taco_ingredient" do
    patch taco_ingredient_url(@taco_ingredient), params: { taco_ingredient: { ingredient_id: @taco_ingredient.ingredient_id, taco_id: @taco_ingredient.taco_id } }
    assert_redirected_to taco_ingredient_url(@taco_ingredient)
  end

  test "should destroy taco_ingredient" do
    assert_difference('TacoIngredient.count', -1) do
      delete taco_ingredient_url(@taco_ingredient)
    end

    assert_redirected_to taco_ingredients_url
  end
end
