=begin
  This is just a special way to write multi-line comments

  # In here, we learned about how to make one-to-many relationships
  # There are painters, and each painter will have many paintings.
  # Each Painting will need to know what painter they need to belong to.
=end



# A class called Painter
# name - attribute
# Paint a picture - method
# style - attribute
# fav_tool - attribute
class Painter
  attr_reader :name, :style

  def initialize(name, style, fav_tool="Paintbrush")
    @name = name
    @style = style
    @fav_tool = fav_tool
  end

  def make_painting(title, price, gallery)
    # Make a new Painting
    new_painting = Painting.new(title, price, self, gallery)

    return new_painting
  end

  def paintings
    # We are asking the painting class to tell us all of the Paintings
    # And then we are ****selecting**** the ones that belong to **this**
    # instance of painter
    Painting.all.select do |painting|
      painting.painter == self
    end
  end

  def galleries
    self.paintings.map do |painting|
      painting.gallery
    end
    # binding.pry
  end

  def painting_titles
    # We are learning how to use instance methods and performing other
    # actions with it. Here we want to print out all of the painting's titles
    # that this painter has made.
    return self.paintings.each do |painting|
      puts painting.title
    end
  end
end
