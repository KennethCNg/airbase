json.ignore_nil!
json.extract!( review,
  :venue_id,
  :user_id,
  :rating,
  :body
)
