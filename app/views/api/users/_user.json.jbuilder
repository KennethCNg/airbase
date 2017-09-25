json.extract! user, :id, :email, :firstname, :lastname

json.profile_picture user.pictures.first.image.url unless user.pictures.first.nil?

json.bookings user.bookings.each do |booking|
  json.partial! 'api/bookings/booking.json', booking: booking
  json.id booking.id
end