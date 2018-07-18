class Student < ActiveRecord::Base
  belongs_to :cohort

  # Custom writer method that our mass assignment will use!
  def cohort_name=(new_name)
    # binding.pry
    # find a cohort object that contains that contains the appropriate name
    # Pull the id if you find it already on the database
    # Go and create it if it doesn't already exist
    cohort = Cohort.find_or_create_by(name: new_name)
    self.cohort_id = cohort.id
    self.save
  end
end
