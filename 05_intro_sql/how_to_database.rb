require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('chinook.db')

# 1. select * from artists;
# 2. select * from artists where name = 'Black Sabbath';
# 3. create table artistfans (id INTEGER PRIMARY KEY, name TEXT);
# 4. alter table artistfans add column artist_id INTEGER;
# 5. insert into artistfans (name, artist_id) values ('andre', 169);
# 6. update artistfans set name = 'toni' where id = 5;
# 7. select * from artistfans where artist_id is not 169;
# 8. select artists.name, COUNT(albums.title) from artists JOIN albums ON albums.ArtistId = artists.ArtistId GROUP BY artists.ArtistId ORDER BY artists.name asc;
