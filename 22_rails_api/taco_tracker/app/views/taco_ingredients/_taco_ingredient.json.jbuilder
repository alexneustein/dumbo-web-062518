json.extract! taco_ingredient, :id, :taco_id, :ingredient_id, :created_at, :updated_at
json.url taco_ingredient_url(taco_ingredient, format: :json)
