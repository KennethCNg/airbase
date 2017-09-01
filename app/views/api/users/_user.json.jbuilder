json.extract! user, :id, :email, :firstname, :lastname

json.bookings user.bookings.each do |booking|
  json.partial! 'api/bookings/booking.json', booking: booking
  json.id booking.id
end