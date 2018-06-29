class Gallery

  attr_reader :name

  def initialize(name)
    @name = name
  end

  # We go through our paintings
  # and ask which ones are in the gallery
  def paintings
    Painting.all.select do |painting|
      painting.gallery == self
    end
  end

  def painters
    # Look through paintings that belong to this gallery
    # Who's your painter
    # Return back an array of painters
    paintings.map do |painting|
      painting.painter
    end
  end
end
