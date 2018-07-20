class CarsController < ApplicationController

  # Index Action -> Shows all of the cars
  def index
    @cars = Car.all
    render :index
  end

  def show
    # Show the individual car
    @car = Car.find(params[:id])
    render :show
  end

  # get '/cars/new'
  def new
    @car = Car.new
    render :new
  end

  # post '/cars'
  def create
    binding.pry
    car = Car.create(car_params)

    # redirect_to "/cars/#{car.id}"
    redirect_to car_path(car)
    # byebug
  end

  def edit
    @car = Car.find(params[:id])
    render :edit
  end

  def update
    binding.pry
    car = Car.find(params[:id])

    car.update(car_params)

    redirect_to car_path(car)
  end

  def destroy
    car = Car.find(params[:id])
    car.destroy

    redirect_to cars_path
  end

  private
  def car_params
    params.require(:car).permit(:make, :model, :year, :color, :name)
  end

end
