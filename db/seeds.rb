# Load seed files.
Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each { |seed| load seed }

# Create Users
create_users

# Create Venues
create_venues