module UsersSeedsHelper
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

end