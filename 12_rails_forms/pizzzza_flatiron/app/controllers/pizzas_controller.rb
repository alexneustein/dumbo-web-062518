class PizzasController < ApplicationController
  def new
    @pizza = Pizza.new
  end

  def create
    @pizza = Pizza.new(pizza_params)
    if @pizza.save
      redirect_to store_path(@pizza.store_id)
      # redirect_to store_path(pizza.store)
    else
      render :new
    end
    # binding.pry
  end

  private
  def pizza_params
    params.require(:pizza).permit(:name, :pizza_type, :price, :store_id)
  end
end
