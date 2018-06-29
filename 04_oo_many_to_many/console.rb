require_relative './config/environment'


toni = Painter.new("Toni", "Abstract", "Paintbrush")
prince = Painter.new("Prince", "Corgi-ism")
marlon = Painter.new("Marlon", "I don't even know", "uhm")

flatiron = Gallery.new("Flatiron School")
whitney = Gallery.new("The Whitney")
moma = Gallery.new("MoMA")


prince.make_painting("My first painting", 10, flatiron)
prince.make_painting("My second painting", 20, whitney)
prince.make_painting("My third painting", 30, whitney)

toni.make_painting("An amazing Day 4 at Flatiron", 1000000000000, whitney)
toni.make_painting("Pre-Day 5 Flatiron School", 5000000000000, whitney)

marlon.make_painting("Uhhhhhh", 100000000, moma)
marlon.make_painting("Uhmmmmmm v2", 20000000, moma)

Pry.start
