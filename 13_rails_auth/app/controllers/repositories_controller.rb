class RepositoriesController < ApplicationController
  before_action :authorized

  def index
      @repositories = current_user.repositories
  end

end
