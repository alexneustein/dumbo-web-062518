class Animal

end


class Mammal < Animal

  def sound
    puts 'raaaaar'
    puts self
  end

  def introduction
    puts "Hi I'm a #{self.class.to_s}"
  end

end


class Koala < Mammal

end

koala = Koala.new
koala.introduction

mammal = Mammal.new
mammal.introduction
