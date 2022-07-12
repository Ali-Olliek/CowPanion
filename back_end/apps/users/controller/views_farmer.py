# Farmer Actions 

from datetime import datetime
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ..middleware.usersmiddleware import user_type_authorizer
from qrcode import make as makeQR
import base64
from io import BytesIO
from PIL import Image

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
@csrf_exempt
def create_farm(request):

    farmer = user_type_authorizer(request)

    if farmer == 2:

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


def get_base64(image):
    buffered = BytesIO()
    image.save(buffered, format="JPEG")
    img_str = base64.b64encode(buffered.getvalue())
    return "data:image/jpeg;base64," + img_str.decode()

# Assign Animall
@csrf_exempt
def add_animal(request):


    # farmer = user_type_authorizer(request)
    # if farmer == 2:
    
        if request.method == "POST":

            data = request.POST

            name = data['name']
            species = data['species']
            breed = data['breed']
            DOB = data['DOB']
            status = data['status']
            Farm_id = data['farm_id']

            last_animal = Animal.objects.order_by('-id', 'pk').first()

            # Create QR CODE Using QR_PYPI
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

    # return JsonResponse({
    #     "code": 401,
    #     "status": "UNAUTH"
    # })

# Update Status
def update_animal_status (request):

    farmer = user_type_authorizer(request)
    if farmer == 2:
    
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

    return JsonResponse({
        "code": 401,
        "status": "UNAUTH"
    })

# Get Animal List
def get_all_animals (request):

    farmer = user_type_authorizer(request)

    if farmer == 2:

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

    return JsonResponse({
        "code": 401,
        "status": "UNAUTH"
    })

# Get A Single Animal
def get_animal (request):

    farmer = user_type_authorizer(request)
    if farmer == 2:
    
        if request.method == "GET":

            data = request.GET

            animal = Animal.objects.filter(id=data['animal_Id'])

            return JsonResponse({
                "code": 200,
                "status": "success",
                "animal": animal,
                "QR_CODE": B64_QR
            })
        
        return JsonResponse({
            "code": 500,
            "status": "USGE"
        })

    return JsonResponse({
        "code": 401,
        "status": "UNAUTH"
    })

