class StudentsController < ApplicationController
  # index actions for students
  get '/students' do
    @students = Student.all
    # By default it is gonna say go into /views/ and find the index.erb ( because of application controller)
    # erb :index # /views/index.erb

    # Here we're explicitly saying, "HEY! I want you to look inside of the students folder
    # for a file that is called index."
    erb :'students/index'
  end

  # Form to making a new student
  get '/students/new' do
    erb :'students/new'
  end

  # Route the form goes through and redirects to our index
  post '/students' do
    # binding.pry
    # What we had before => Student.create({name: ..., cohort_id: .....})
    # What we are doing now => Student.create({name: ..., cohort_name: .....})

    # Key differences is because of Mass Assignment! You are giving the Student.new
    # a hash and it will take in each keys inside of our hash and look for a writer method
    @student = Student.create(params)
    redirect to("/students")
  end

  # Shows our student
  get '/students/:id' do
    @student = Student.find(params[:id])
    erb :'students/show'
  end

  # Takes a student and show our edit page
  get '/students/:id/edit' do
    @student = Student.find(params[:id])
    erb :'students/edit'
  end

  # Where the form will go to!
  patch '/students/:id' do
    @student = Student.find(params[:id])
    @student.update(student_params)

    redirect to("/students/#{@student.id}")
  end

  private
  def student_params
    params["student"]
  end
end
