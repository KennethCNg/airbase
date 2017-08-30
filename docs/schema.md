# Database Schema

**🚨 This will not be maintained during development. 🚨**  
**🚨 Look at `schema.rb` instead. 🚨**


### users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
firstname       | string    | not null, indexed
lastname        | string    | not null, indexed
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
phone_number    | string    | not null
school          | string    | not null
work            | string    | not null
selfie_id       | integer   | not null, indexed, unique
government_ID   | string    | not null, unique


### venues
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
host_id         | integer   | not null, indexed, unique
name            | string    | not null, indexed
street          | string    | not null
city            | string    | not null
state           | string    | not null
postal_code     | string    | not null
lat             | float     | not null, indexed
lng             | float     | not null, indexed


### bookings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
venue_id        | integer   | not null, indexed, unique
check_in        | timestamp | not null
check_out       | timestamp | not null

### reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
venue_id        | integer   | not null, indexed, unique
rating          | integer   | not null
body            | text      | not null

### spoken_languages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
language_name   | string    | not null, indexed, unique
localization    | string    | not null, indexed, unique

### user_spoken_languages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
language_id     | integer   | not null, indexed, unique
user_id         | integer   | not null, indexed, unique

### messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
chat_id         | integer   | not null, indexed, unique
timestamp       | timestamp | not null
body            | text      | not null

### chats
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key

### user_chats (JOIN)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
chat_id         | integer   | not null, indexed, unique

### venue_amenities (JOIN)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
venue_id        | integer   | not null, indexed, unique
amenity_id      | integer   | not null, indexed, unique

### venue_house_rules (JOIN)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
venue_id        | integer   | not null, indexed, unique
house           | integer   | not null, indexed, unique
