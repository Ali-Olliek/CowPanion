# Users Middleware
# Checks JWT Token

from django.http import JsonResponse
import jwt

whitelisted_urls = [
    '/api/v1/signUp/',
    '/api/v1/signIn/'
]

admin_urls = [
    '/api/v1/adminGetUsers/',
    '/api/v1/adminGetAnimals/',
    '/api/v1/adminFarmAnimals/',
    '/api/v1/adminGetFarms/',
]

farmer_urls = [
    '/api/v1/createFarm/',
    '/api/v1/addAnimal/',
    '/api/v1/animals/',
    '/api/v1/animal/',
    '/api/v1/animal/update/?id',
]

vet_urls = [

]

def user_type_middleware(get_response):

    def middleware(request):

        url = request.get_full_path()

        # If requested URL does not require Authentication
        if url in whitelisted_urls:

            return get_response(request)

        # If requested URL requires Authentication
        # Process the JWT Token and get the User Type

        token = request.headers['Authorization']
        payload = jwt.decode(token, '18795', algorithms=['HS256'])
        user_type = payload['user_type']

        # Conditionals to check which request gets forwarded to which controller/view

        # If Admin
        if url in admin_urls and user_type == 1:

            return get_response(request)
        # If Farmer
        elif url in farmer_urls and user_type == 2:

            return get_response(request)
        # If Vet
        elif url in vet_urls and user_type == 3:

            return get_response(request)

        return JsonResponse({
            "code": 401,
            "status": "UNAUTH"
        })

    # Calls The Middleware
    return middleware
        
