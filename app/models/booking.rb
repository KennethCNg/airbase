class Booking < ApplicationRecord
  validate :venue_available
  validate :booking_duration_valid
  
  belongs_to :user
  belongs_to :venue
  has_one :host, through: :venue
  
  def overlaps?(booking)
    return true if booking.check_in.between?(self.check_in, self.check_out)
    return true if booking.check_out.between?(self.check_in, self.check_out)
    return true if booking.check_in < self.check_in && booking.check_out > self.check_out
    false
  end
  
  private
  
  def venue_available
    venue_bookings = self.venue.bookings
    venue_bookings.any? do |vb|
      if vb.overlaps?(self)
        errors.add(:check_in, 'time is unavailable')
        break
      end
    end
  end
  
  def booking_duration_valid
    errors.add(:check_in, 'booking must be at least 1 day') unless self.check_in < (self.check_out - 1.day)
  end
  
  
end
