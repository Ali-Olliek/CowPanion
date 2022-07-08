# Farmer Actions 

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ..middleware.usersmiddleware import user_type_authorizer


# necessary models

from ...farms.models import Farm
from ..models import User

# Functions 

@csrf_exempt
def create_farm(request):

    if not user_type_authorizer(request):
        return JsonResponse({
            "code": 401,
            "status": "UNAUTH"
        })

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


def add_animal(request):

    if not user_authorizer(request):
        return JsonResponse({
            "code": 401,
            "status": "UNAUTH"
        })
    
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

def update_animal_status (request):

    if not user_authorizer(request):
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

