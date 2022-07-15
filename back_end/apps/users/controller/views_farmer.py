# Farmer Actions 

import json
from lib2to3.pytree import convert
from qrcode import make as makeQR
from django.http import JsonResponse
from utils.utility_functions import get_base64, object_to_json

# Necessary models

from ..models import User
from ...farms.models import Farm
from ...animals.models import Animal
from ...reminders.models import Reminder
from ...profiles.milks.models import Milk

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
            location = data['location']
            milk_container_volume = data['milk_container_volume']
            farm_password = data['farm_password']

            farmer = User.objects.get(id = data['user_id'])

            farm = Farm (
                name=farm_name,
                farmer=farmer,
                location = location,
                milk_container_volume = milk_container_volume,
                farm_password = farm_password
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

# Assign Animal
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

        animal_json = object_to_json(animal)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "animal": animal_json
        })
    
    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# Create Reminders
def create_reminder(request):

    if request.method == "POST":

        data = request.POST

        due_time = data['due_time']
        task_description = data['task_description']
        farm_id = data['farm_id']
        animal_id = data['animal_id']

        if not farm_id and not animal_id:
            return JsonResponse({
                "code": 500,
                "status": "USGE",
                "message": "Reminder needs either to be linked to either farm or animal"
            })

        reminder = Reminder (
            due_time = due_time,
            task_description = task_description,
            farm_id = farm_id,
            animal_id = animal_id
        )

        reminder.save()

        return JsonResponse({
            "code": 201,
            "status": "success",
        })

    return JsonResponse({
        "code":500,
        "status": "USGE"
    })

# Get Reminders Per Farm
def get_farm_reminders(request):
    
    if request.method == "GET":
        farm_id = request.GET['farm_id']

        reminders = Reminder.objects.all().filter(farm_id = farm_id)

        reminders_json = object_to_json(reminders)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "reminders": reminders_json
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# Get Reminders Per Animal
def get_animal_reminders(request):

    if request.method == "GET":

        animal_id = request.GET['animal_id']

        reminders = Reminder.objects.all().filter(animal_id = animal_id)

        reminders_json = object_to_json(reminders)

        return JsonResponse({
            "code":200,
            "status": "success",
            "reminders":reminders_json 
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })