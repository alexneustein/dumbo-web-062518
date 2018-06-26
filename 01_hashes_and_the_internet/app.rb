# Google Books API "https://www.googleapis.com/books/v1/volumes?q={#{term}}"

require 'pry'
require 'rest-client'
require 'json'

response = RestClient.get 'https://www.reddit.com/.json'

json_response = JSON.parse(response.body)

# binding.pry

reddit_post_titles = json_response["data"]["children"].map do |post|
  {
    title: post["data"]["title"],
    subreddit: post["data"]["subreddit"],
    score: post["data"]["score"]
  }
end

reddit_post_titles.each do |post|
  puts "============================"
  puts "(#{post[:score]}) - #{post[:title]}"
  puts "Found in r/#{post[:subreddit]}"
  puts "============================"
end
#
# puts json_response
