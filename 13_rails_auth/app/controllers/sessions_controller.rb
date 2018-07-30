class SessionsController < ApplicationController

  # To the login form
  def new
  end

  # This is going to go through the
  # authentication process
  def create
    # binding.pry
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      redirect_to login_path
    end
  end

  def destroy
    session.delete :user_id
    redirect_to login_path
  end
end
