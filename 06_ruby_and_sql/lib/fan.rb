class Fan

  # All lowercase and a stting, and (create a table) fans
  def self.table_name
    self.name.downcase + 's'
  end

  def self.create_table
    sql = <<-SQL
    CREATE TABLE IF NOT EXISTS fans (id INTEGER PRIMARY KEY, name TEXT, age INTEGER);
    SQL

    DB[:conn].execute(sql)
  end

  def self.insert(name, age)
    sql = <<-SQL
    INSERT INTO fans (name, age) VALUES ('#{name}', #{age});
    SQL

    # binding.pry

    DB[:conn].execute(sql)
    # INSERT INTO fans (name, age) VALUES (name, age)
    # Creating something on our tables
  end

  def self.find(id)
    # SELECT * FROM fans WHERE id = id;
    sql = <<-SQL
    SELECT id,name,age FROM fans WHERE id = ?;
    SQL

    DB[:conn].execute(sql, id)
  end

  def self.update(id, name, age)
    sql = <<-SQL
    UPDATE fans SET name = ?, age = ?
    WHERE id = ?;
    SQL

    DB[:conn].execute(sql, name, age, id)
    self.find(id)
  end

  def self.destroy(id)
    sql = <<-SQL
    DELETE FROM fans WHERE id = #{id}
    SQL
    DB[:conn].execute(sql)
  end

  # -----table name
  # insert
  # finding
  # updating
  # deleting

  # Fan.create
  # Fan.insert
  # Fan.find
  # Fan.update
end
