class Painting

  # title
  # painter
  # paint - type of paint (string)
  # size
  # price

  attr_reader :title, :price, :painter

  @@all = []

  def initialize(title, price, painter)
    @title = title
    @price = price
    @painter = painter

    @@all << self
  end

  def self.all
    @@all
  end

end
