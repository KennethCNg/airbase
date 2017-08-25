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

ActiveRecord::Schema.define(version: 20170824234420) do

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

  create_table "venues", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "accommodates", null: false
    t.integer "bathrooms", null: false
    t.integer "bedrooms", null: false
    t.integer "beds", null: false
    t.string "property_type", null: false
    t.string "room_type", null: false
    t.integer "visit_count"
    t.string "name"
    t.string "street"
    t.string "city"
    t.string "state"
    t.string "postal_code"
    t.float "lat", null: false
    t.float "lon", null: false
    t.integer "minimum_stay"
    t.string "check_in_type"
    t.time "check_in"
    t.time "check_out"
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
    t.index ["owner_id"], name: "index_venues_on_owner_id"
    t.index ["price"], name: "index_venues_on_price"
  end

end
