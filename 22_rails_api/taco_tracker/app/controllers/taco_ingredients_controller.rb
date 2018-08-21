class TacoIngredientsController < ApplicationController
  before_action :set_taco_ingredient, only: [:show, :edit, :update, :destroy]

  # GET /taco_ingredients
  # GET /taco_ingredients.json
  def index
    @taco_ingredients = TacoIngredient.all
  end

  # GET /taco_ingredients/1
  # GET /taco_ingredients/1.json
  def show
  end

  # GET /taco_ingredients/new
  def new
    @taco_ingredient = TacoIngredient.new
  end

  # GET /taco_ingredients/1/edit
  def edit
  end

  # POST /taco_ingredients
  # POST /taco_ingredients.json
  def create
    @taco_ingredient = TacoIngredient.new(taco_ingredient_params)

    respond_to do |format|
      if @taco_ingredient.save
        format.html { redirect_to @taco_ingredient, notice: 'Taco ingredient was successfully created.' }
        format.json { render :show, status: :created, location: @taco_ingredient }
      else
        format.html { render :new }
        format.json { render json: @taco_ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /taco_ingredients/1
  # PATCH/PUT /taco_ingredients/1.json
  def update
    respond_to do |format|
      if @taco_ingredient.update(taco_ingredient_params)
        format.html { redirect_to @taco_ingredient, notice: 'Taco ingredient was successfully updated.' }
        format.json { render :show, status: :ok, location: @taco_ingredient }
      else
        format.html { render :edit }
        format.json { render json: @taco_ingredient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /taco_ingredients/1
  # DELETE /taco_ingredients/1.json
  def destroy
    @taco_ingredient.destroy
    respond_to do |format|
      format.html { redirect_to taco_ingredients_url, notice: 'Taco ingredient was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_taco_ingredient
      @taco_ingredient = TacoIngredient.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def taco_ingredient_params
      params.require(:taco_ingredient).permit(:taco_id, :ingredient_id)
    end
end
