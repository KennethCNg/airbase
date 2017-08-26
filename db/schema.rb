# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170825160858) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amenities", force: :cascade do |t|
    t.string "name", null: false
    t.string "type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_amenities_on_name"
    t.index ["type"], name: "index_amenities_on_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["firstname"], name: "index_users_on_firstname"
    t.index ["lastname"], name: "index_users_on_lastname"
  end

  create_table "venue_amenities", force: :cascade do |t|
    t.integer "venue_id", null: false
    t.integer "amenity_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["amenity_id"], name: "index_venue_amenities_on_amenity_id"
    t.index ["venue_id"], name: "index_venue_amenities_on_venue_id"
  end

  create_table "venues", force: :cascade do |t|
    t.integer "host_id", null: false
    t.integer "accommodates", null: false
    t.integer "bathrooms", null: false
    t.integer "bedrooms", null: false
    t.integer "beds", null: false
    t.string "property_type", null: false
    t.string "room_type", null: false
    t.integer "visit_count", default: 0
    t.string "name", null: false
    t.string "street", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "postal_code", null: false
    t.float "lat", null: false
    t.float "lon", null: false
    t.integer "minimum_stay"
    t.string "check_in_type"
    t.time "check_in", null: false
    t.time "check_out", null: false
    t.integer "price", null: false
    t.integer "extra_person_cost"
    t.integer "extra_person_threshold"
    t.integer "cleaning_fee"
    t.integer "security_deposit"
    t.integer "weekend_price"
    t.float "weekly_discount"
    t.float "monthly_discount"
    t.string "pets"
    t.text "description_about"
    t.text "description_space"
    t.text "description_guest_access"
    t.text "description_guest_interaction"
    t.text "description_other_notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["accommodates"], name: "index_venues_on_accommodates"
    t.index ["bathrooms"], name: "index_venues_on_bathrooms"
    t.index ["bedrooms"], name: "index_venues_on_bedrooms"
    t.index ["beds"], name: "index_venues_on_beds"
    t.index ["city"], name: "index_venues_on_city"
    t.index ["host_id"], name: "index_venues_on_host_id"
    t.index ["name"], name: "index_venues_on_name"
    t.index ["price"], name: "index_venues_on_price"
    t.index ["state"], name: "index_venues_on_state"
    t.index ["street"], name: "index_venues_on_street"
  end

end
