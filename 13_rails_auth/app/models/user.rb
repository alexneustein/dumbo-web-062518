class User < ApplicationRecord
  has_many :repositories
  has_secure_password
end
