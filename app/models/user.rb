class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  
  validates :firstname, :lastname, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :email, format: { 
    with: VALID_EMAIL_REGEX, 
    on: :create, 
    message: 'must have valid format' 
  }
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  has_many :venues, foreign_key: :host_id
  has_many :bookings
  has_many :pictures, as: :imageable, dependent: :destroy
  
  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_user_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16);
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
