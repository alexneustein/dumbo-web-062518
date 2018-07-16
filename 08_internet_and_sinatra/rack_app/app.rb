require 'pry'

class App
  def call(environment_hash)
    response = Rack::Response.new
    # If the request_path is '/', show Hello world
    # If the request_path is '/dogs', shows a list of dogs
    # if the request_path is '/dogs/corgis', show prince
    # binding.pry
    if environment_hash["REQUEST_PATH"] == '/'
      response.write 'Hello World!'
    elsif environment_hash["REQUEST_PATH"] == '/dogs'
      doggos = [ 'Chow Chow', 'Corgi', 'Beagle', 'Pug', 'Pomeranian', 'Shih Tzu' ]
      response.write "#{doggos}"
    elsif environment_hash["REQUEST_PATH"] == '/dogs/corgis'
      response.write "Prince"
    else
      response.write 'GO TO A ROUTE THAT WORKS, DUMMY.'
    end


    response.finish
  end
end
