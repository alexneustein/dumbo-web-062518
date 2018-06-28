require_relative './config/environment'


toni = Painter.new("Toni", "Abstract", "Paintbrush")
prince = Painter.new("Prince", "Corgi-ism")


prince.make_painting("My first painting", 10)
prince.make_painting("My second painting", 20)
prince.make_painting("My third painting", 30)

toni.make_painting("An amazing Day 4 at Flatiron", 1000000000000)
toni.make_painting("Pre-Day 5 Flatiron School", 5000000000000)


Pry.start
