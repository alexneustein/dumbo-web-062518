class CohortsController < ApplicationController
  get '/cohorts/:id' do
    @cohort = Cohort.find(params[:id])
    erb :"/cohorts/show"
  end
end
