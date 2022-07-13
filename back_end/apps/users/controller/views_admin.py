# Admin Actions

import json
from django.http import JsonResponse
from django.core.serializers import serialize

# Necessary Models

from ...users.models import User
from ...farms.models import Farm
from ...animals.models import Animal

#Functions

# Get all users in database (Farmers, and Vets)
def get_users(request):

    if request.method == "GET":

        users = User.objects.all().values('name', 'email', 'DOB', 'id')
        
        users_list = []
        for user in users:
            users_list.append(user)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "users": users_list,
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })


# Get all animals (regardless of farm)
def get_all_animals(request):

    if request.method == "GET":

        animals = Animal.objects.all().values('id','farm_id' ,'name', 'DOB', 'status', 'breed')

        animals_list = []
        for animal in animals:
            animals_list.append(animal)
        
        return JsonResponse({
            "code": 200,
            "status": "success",
            "animals": animals_list
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# Get all animals of a specific farm/farmer

def get_farm_animals(request):
    
    if request.method == "GET":
        
        farm_id = request.GET['farm_id']
        animals = Animal.objects.all().filter(farm_id=farm_id).values('id', 'farm_id', 'name', 'DOB', 'status', 'breed')

        animals_list = []
        for animal in animals:
            animals_list.append(animal)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "animals": animals_list
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })



def get_farms (request):

    if request.method == "GET":

        farms = Farm.objects.all().values('id','name')
        farms_list = []
        for farm in farms:
            farms_list.append(farm)

        return JsonResponse({
            "code":200,
            "status": "success",
            "farms": farms_list
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })
