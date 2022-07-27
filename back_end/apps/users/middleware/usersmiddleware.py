# Users Middleware

from django.http import JsonResponse
import jwt

# No-Authentication URLs
whitelisted_urls = [
    '/api/v1/signUp/',
    '/api/v1/signIn/',
    '/api/v1/updateSensor/'
]

admin_urls = [
    '/api/v1/adminGetUsers/',
    '/api/v1/adminGetAnimals/',
    '/api/v1/adminFarmAnimals/',
    '/api/v1/adminGetFarms/',
    '/api/v1/addFeed/',
    '/api/v1/getFeeds/',
]

farmer_urls = [
    '/api/v1/createFarm/',
    '/api/v1/addAnimal/',
    '/api/v1/animals/',
    '/api/v1/animal/',
    '/api/v1/animal/update/',
    '/api/v1/createReminder/',
    '/api/v1/farmReminders/',
    '/api/v1/animalReminders/',
    '/api/v1/getFeeds/',
    '/api/v1/getMilkProfiles/',
    '/api/v1/createRecipe/',
    '/api/v1/getRecipe/',
    '/api/v1/getMedicalRecord/',
    '/api/v1/deleteReminder/',
    '/api/v1/getGeneralStats/',
    '/api/v1/getVets/',
]

vet_urls = [
    '/api/v1/animals/',
    '/api/v1/animal/',
    '/api/v1/updateMedicalRecord/',
    '/api/v1/getMedicalRecord/',
    '/api/v1/getAssignedAnimals/'
]


def user_type_middleware(get_response):

    def middleware(request):

        # URL sanitizing
        request_url = request.get_full_path()

        # Rsplit at the last forward slash
        # To exclude the params
        splitted_url = request_url.rsplit('/', 1)

        # Re-add the slash to the URL
        splitted_url[0] += "/"

        # Take the URL (Example: /api/v1/XXXXXX/)
        sanitized_url = splitted_url[0]

        # If requested URL does not require Authentication
        if sanitized_url in whitelisted_urls:

            return get_response(request)

        # If requested URL requires Authentication
        # Process the JWT Token and get the User Type
        token = request.headers['Authorization']

        payload = jwt.decode(token, '18795', algorithms=['HS256'])
        user_type = payload['user_type']

        # Conditionals to check which request gets forwarded to which controller/view

        # If Admin
        if sanitized_url in admin_urls and (user_type == '1' or user_type == 1):
            return get_response(request)

        # If Farmer
        elif sanitized_url in farmer_urls and (user_type == '2' or user_type == 2):
            return get_response(request)

        # If Vet
        elif sanitized_url in vet_urls and (user_type == '3' or user_type == 3):
            return get_response(request)

        return JsonResponse({
            "code": 401,
            "status": "UNAUTH"
        })

    # Calls The Middleware
    return middleware
