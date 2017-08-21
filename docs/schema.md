# Database Schema

### users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | not null
phone_number    | string    | not null
school          | string    | not null
work            | string    | not null
selfie_id       | integer   | not null, indexed, unique
government_ID   | string    | not null, unique


### venues
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
geolocation_id  | integer   | not null, indexed, unique
owner_id        | integer   | not null, indexed, unique
name            | string    | not null, indexed, unique
phone_number    | string    | not null, indexed, unique

### bookings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique
venue_id        | integer   | not null, indexed, unique
start_time      | timestamp | not null
end_time        | timestamp | not null

### geolocations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
venue_id        | integer   | not null, indexed, unique
street          | string    | not null, indexed, unique
city            | string    | not null, indexed, unique
state           | string    | not null, indexed, unique
postal_code     | string    | not null, indexed, unique

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

