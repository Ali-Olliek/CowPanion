# Farmer Actions 

import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from ..middleware.usersmiddleware import user_authorizer

# necessary models

from ...farms.models import Farm
from ..models import User
from ...animals.models import Animal

# Response Status Codes (For Internal Handling):
    # 200 -- Request handled successfully
    # 201 -- Created
    # 208 -- Already Exists
    # 500 -- General Internal Error

    # Error Codes:
    # USGE -- Unsuccessful General Error
    # USOP -- Unsuccessful Old Password
    # USAR -- Unsuccessful Already Registered
    # USIP -- Unsuccessful Incorrect Password


# Functions 
        # return JsonResponse({
        #     "code": 401,
        #     "status": "UNAUTH"
        # })

@csrf_exempt
def create_farm(request):

    user = user_authorizer(request)
    user_type = user['user_type']

    if user and user_type == 2:

        if request.method == "POST":

            data = request.POST

            farm_name = data['name']
            farmer = User.objects.get(id = data['user_id'])

            farm = Farm (
                name=farm_name,
                farmer=farmer,
            )
            
            farm.save()

            return JsonResponse({
                "code": 201,
                "status": "Farm Created Successfully"
            })
        
        return JsonResponse({
            "code": 500,
            "status": "Check Request Method"
        })
        
    return JsonResponse({
            "code": 401,
            "status": "UNAUTH"
        })

# Assign Animal
def add_animal(request):

    farmer = user_type_authorizer(request)
    if farmer == 2:
    
        if request.method == "POST":

            data = request.POST

            name = data['name']
            species = data['species']
            breed = data['breed']
            DOB = data['2020']
            status = data['status']
            
            animal = Animal (
                name = name,
                species = species,
                breed = breed,
                DOB = DOB,
                status = status
            )

            animal.save()

            return JsonResponse({
                "code" : 201,
                "status" : "Success",
                "animal" : animal
            })

        return JsonResponse({
            "code": 500,
            "status": "Check Request Method"
        })

    return JsonResponse({
        "code": 401,
        "status": "UNAUTH"
    })

    if request.method == "POST":
        
        data = request.POST

        updated_status = data['status']

        animal = Animal.objects.filter(id=data['id']).update(status = updated_status)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "user": animal,
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE",
    })

def get_all_animals (request):

    if not user_authorizer(request):
        return JsonResponse({
            "code": 401,
            "status": "UNAUTH"
        })

    if request.method == "GET":

        data = request.GET
        farm_id = data['farm_id']

        animals = Animal.objects.all().filter(farm_id = farm_id)

        return JsonResponse({
            "code": 200,
            "status" : "success",
            "animals": animals
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

def get_animal (request):

    if not user_authorizer (request):
        return JsonResponse({
            "code": 401,
            "status": "UNAUTH"
        })
    
    if request.method == "GET":

        data = request.GET

        animal = Animal.objects.filter(id=data['animal_Id'])

        return JsonResponse({
            "code": 200,
            "status": "success",
            "animal": animal
        })
    
    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })