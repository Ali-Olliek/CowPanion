# Users Middleware
# Checks JWT Token
# Checks user_Type

import jwt

# JSON WEB TOKEN VALIDATION
def jwt_validator (token):

    payload = jwt.decode(token, '18795', algorithms=['HS256'])

    return payload

# USER TYPE AUTHORIZATION
def user_type_authorizer(request):

    token = request.headers['Authorization']
    data = jwt_validator(token)

    if data:
        user_type = data['user_type']

        return user_type

    return False