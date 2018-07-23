class StoresController < ApplicationController
  # Show all stores
  # Show an individual store
  # Create a New Store
  def index
    # Instance variable that contains all of the data
    @stores = Store.all
    # render :index
  end

  # '/stores/1'
  def show
    @store = Store.find(params[:id])
  end

  def new
    @store = Store.new
  end

  def create
    @store = Store.create(store_params)

    if @store.valid?
      # redirect_to @store
      redirect_to store_path(@store)
    else
      render :new
    end
    # binding.pry
  end

  # GET '/stores/1/edit'
  def edit
    @store = Store.find(params[:id])
  end

  private
  def store_params
    params.require(:store).permit(:name, :location)
  end
end
