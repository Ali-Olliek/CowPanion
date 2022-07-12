# Admin Actions

from django.http import JsonResponse
from ..middleware.usersmiddleware import user_type_authorizer

# Necessary Models

from ...users.models import User
from ...farms.models import Farm
from ...animals.models import Animal

#Functions


# Get all users in database (Farmers, and Vets)
def get_users(request):

    admin = user_type_authorizer(request)

    if admin == 1:

        if request.method == "POST":

            users = User.objects.all()
        
            return JsonResponse({
                "code": 200,
                "status": "success",
                "users": users,
            })

        return JsonResponse({
            "code": 500,
            "status": "USGE"
        })

    return JsonResponse({
        "code": 401,
        "status": "UNAUTH"
    })

# Get all animals (regardless of farm)
def get_all_animals(request):

    admin = user_type_authorizer(request)

    if admin == 1:

        if request.method == "GET":

            animals = Animal.objects.all()

            return JsonResponse({
                "code": 200,
                "status": "success",
                "animals": animals
            })

        return JsonResponse({
            "code": 500,
            "status": "USGE"
        })

    return JsonResponse({
        "code": 401,
        "status": "UNAUTH"
    })

# Get all animals of a specific farm/farmer

