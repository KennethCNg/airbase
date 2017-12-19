USER_GEN_URI = 'https://randomuser.me/api/?'

def fetch_users
  options = {
    query: {
      dataType: 'json',
      results: '20',
    }
  }
  resp = HTTParty.get(USER_GEN_URI, options)
  resp.parsed_response['results']
end

def create_users
  User.destroy_all

  password = 'password'
  now_i = Time.now.to_i
  r = Random.new(now_i)

  users = fetch_users()
  users.each do |usr|
    user = User.new(
      firstname: usr['name']['first'],
      lastname: usr['name']['last'],
      email: Faker::Internet.unique.email,
      password: password
    )
    user.save!
    pic = Picture.new(
      image: URI.parse(usr['picture']['large']),
      imageable: user
    )
    pic.save!
  end

  demoUser = User.new(
    firstname: 'guest',
    lastname: 'user',
    email: 'd@d.com',
    password: password
  )
  demoUser.save!
end



