class Painting

  attr_reader :title, :price, :painter, :gallery

  @@all = []

  def initialize(title, price, painter, gallery)
    @title = title
    @price = price
    @painter = painter
    @gallery = gallery

    @@all << self
  end

  def self.all
    @@all
  end

end
