json.ignore_nil!
json.extract!( booking,
  :id,
  :venue_id,
  :user_id,
  :check_in,
  :check_out
)
json.host_id booking.host.id
