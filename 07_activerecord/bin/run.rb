require_relative '../config/environment'



puts "HELLO WORLD"

puts "Who's the doctor you're going to see?"
doctor_name = gets.chomp
Doctor.find_by(name: doctor_name)
puts "What's is your name"
puts "What date"
