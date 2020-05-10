# frozen_string_literal: true

module ApiHelper
  def body_as_json
    json_str_to_hash(response.body)
  end

  def json_str_to_hash(str)
    JSON.parse(str).with_indifferent_access
  end

  # TODO: For future.
  # def authenticated_header(request, user)
  #   token = Jwt::TokenProvider.new(user_id: user.id).call
  #   request.headers.merge!('Authorization': "Bearer #{token}")
  # end
end
