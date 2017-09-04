json.ignore_nil!
json.extract!( review,
  :id,
  :venue_id,
  :user_id,
  :rating,
  :body
)
