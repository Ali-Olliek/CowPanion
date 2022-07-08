# Users Middleware
# Checks JWT Token
# Checks user_Type

import jwt

def jwt_validator (token):

    payload = jwt.decode(token, '18795', algorithms=['HS256'])

    if payload: return payload
    
    return payload


def user_type_authorizer(request):

    token = request.headers['Authorization']

    if jwt_validator(token):

        return True
    
    return False