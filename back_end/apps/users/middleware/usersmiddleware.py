# Users Middleware
# Checks JWT Token

from django.http import JsonResponse
import jwt

whitelisted_urls = [
    '/api/v1/signUp/',
    '/api/v1/signIn/'
]

def users_middleware(get_response):
    
    # Actual Middleware
    def middleware(request):

        url = request.get_full_path()

        # If requested URL doesn't need Authentication --> Pass Request
        if url in whitelisted_urls:
        
            response = get_response(request)
            return response
        
        # If requested URL needs Authentication
        token = request.headers['Authorization']
        payload = jwt.decode(token, '18795', algorithms=['HS256'])
        
        if payload:
            return get_response(request)

        return JsonResponse({
            "code": 401,
            "status":"UNAUTH"
        })

    # Calls The Middleware
    return middleware