# Farmer Actions 

import base64
import json
from io import BytesIO
from qrcode import make as makeQR
from django.http import JsonResponse
from django.core.serializers import serialize
from django.views.decorators.csrf import csrf_exempt
from ..middleware.usersmiddleware import user_type_authorizer

# Necessary models

from ..models import User
from ...farms.models import Farm
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

# Assign Farm

def create_farm(request):

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

# Utility Function To Create B64 Format
def get_base64(image):
    buffered = BytesIO()
    image.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue())
    return "data:image/jpeg;base64," + img_str.decode()

# Assign Animall

def add_animal(request):

    if request.method == "POST":

        data = request.POST

        name = data['name']
        species = data['species']
        breed = data['breed']
        DOB = data['DOB']
        status = data['status']
        Farm_id = data['farm_id']

        # Get The Last Record in DB
        last_animal = Animal.objects.order_by('-id', 'pk').first()

        # Create QR CODE For The Current Record (Previous + 1)
        QR_code = makeQR(f'http://localhost/api/v1/animal/{last_animal.id + 1}')
        B64_QR = get_base64(QR_code)

        animal = Animal (
            name = name,
            species = species,
            breed = breed,
            DOB = DOB,
            status = status,
            farm_id = Farm_id,
            QR_code = B64_QR
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


# Update Status
def update_animal_status (request):
    
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


# Get Animal List
def get_all_animals (request):

    if request.method == "GET":

        farm_id = request.GET['farm_id']

        animals = Animal.objects.all().filter(farm_id = farm_id).values('name', 'status', 'id', 'DOB')

        animals_list = []
        for animal in animals:
            animals_list.append(animal)
        
        return JsonResponse({
            "code": 200,
            "status" : "success",
            "animals": animals_list
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# Get A Single Animal
def get_animal (request):
    
    if request.method == "GET":
        animal_id = request.GET['animal_id']
        
        animal = Animal.objects.filter(id=animal_id)

        to_json = serialize("json", animal)
        animal_json = json.loads(to_json)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "animal": animal_json
        })
    
    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })