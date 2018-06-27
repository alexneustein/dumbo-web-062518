require 'pry'

# Words that mean the same things, but might hear me switch them up
# Setters <=> Writers
# Getters <=> Readers
class Fruit

  @@all = []
  @@seeds = "Hello World"

  # Macros => "They generate methods for us!"
  # attr_reader :name, :taste, :type, :color # => Generates reader methods
  # attr_writer :name, :taste, :type, :color # => Generates writer methods
  attr_accessor :name, :taste, :type, :color # => Generates both readers and writers

  def initialize(color, taste, type, name)
    @color = color
    @taste = taste
    @type = type
    @name = name

    # We are making attributes for our objects here, using "instance variables"
    # and assigning the values from our arguments that got passed in
    # color
    # taste
    # type
    # texture
    # name
    @@all << self
    puts "WE'RE MAKING A NEW FRUIT"
  end

  # Class method to show all instances that have been made
  def self.all
    @@all
  end

  def self.seeds
    @@seeds
  end

  # Class Method
  def self.whoami
    puts self
  end

  # Instance Method
  def whoami
    puts self
  end

  # All our reader methods

  # def name
  #   @name
  # end

  # def color
  #   @color
  # end
  #
  # def taste
  #   @taste
  # end
  #
  # def type
  #   @type
  # end

  # Writer methods
  # def color=(new_color)
  #   @color = new_color
  # end
  #
  # def taste=(new_taste)
  #   @taste = new_taste
  # end
  #
  # def type=(new_type)
  #   @type = new_type
  # end
  #
  # def name=(new_name)
  #   @name = new_name
  # end
end

# We will use this in methods: binding.pry

Pry.start
