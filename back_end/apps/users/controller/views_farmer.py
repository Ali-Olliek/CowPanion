# Farmer Actions

from lib2to3.pytree import convert
from qrcode import make as makeQR
from django.http import HttpResponse, JsonResponse
from utils.utility_functions import get_base64, object_to_json

# Necessary models

from ..models import User
from ...farms.models import Farm
from ...animals.models import Animal
from ...reminders.models import Reminder
from ...profiles.milks.models import Milk
from ...recipes.models import Recipe
from ...feeds.models import Feed

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

        farmer = User.objects.get(id=data['user_id'])

        farm = Farm(
            name=farm_name,
            farmer=farmer,
            location=location,
            milk_container_volume=milk_container_volume,
            farm_password=farm_password,
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
        user_id = data['user_id']
        farm = Farm.objects.filter(farmer_id=user_id).get()
        farm_id = farm.id
        # Get The Last Record in DB
        last_animal = Animal.objects.order_by('-id', 'pk').first()

        # Create QR CODE For The Current Record (Previous + 1)
        if not last_animal:
            QR_code = makeQR(
                f'http://localhost/api/v1/animal/{1}')
            B64_QR = get_base64(QR_code)
        else:
            QR_code = makeQR(
                f'http://localhost/api/v1/animal/{last_animal.id + 1}')
            B64_QR = get_base64(QR_code)

        animal = Animal(
            name=name,
            species=species,
            breed=breed,
            DOB=DOB,
            status=status,
            farm_id=farm_id,
            QR_code=B64_QR
        )

        animal.save()

        return JsonResponse({
            "code": 201,
            "status": "Success",
        })

    return JsonResponse({
        "code": 500,
        "status": "Check Request Method"
    })


# Update Status
def update_animal_status(request):

    if request.method == "POST":

        data = request.POST

        updated_status = data['status']

        animal = Animal.objects.filter(
            id=data['id']).update(status=updated_status)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "animal_id": animal,
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE",
    })


# Get Animal List
def get_all_animals(request):

    if request.method == "GET":

        user_id = request.GET['user_id']
        farm = Farm.objects.filter(farmer_id=user_id).get()
        animals = Animal.objects.all().filter(
            farm_id=farm.id).values('name', 'status', 'id', 'DOB')

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

# Get A Single Animal


def get_animal(request):

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

        farmer_id = data['user_id']
        farm = Farm.objects.filter(farmer_id=farmer_id).get()

        task_title = data['task_title']
        task_description = data['task_description']
        due_time = data['due_time']

        if not farm.id:
            return JsonResponse({
                "code": 500,
                "status": "USGE",
                "message": "Reminder needs either to be linked to either farm or animal"
            })

        reminder = Reminder(
            due_time=due_time,
            task_title=task_title,
            task_description=task_description,
            farm_id=farm.id,
        )

        reminder.save()

        return JsonResponse({
            "code": 201,
            "status": "success",
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# Get Reminders Per Farm


def get_farm_reminders(request):

    if request.method == "GET":
        farmer = request.GET['user_id']
        farm = Farm.objects.filter(farmer_id=farmer).get()

        reminders = Reminder.objects.all().filter(farm_id=farm.id)

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

        reminders = Reminder.objects.all().filter(animal_id=animal_id)

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

# function to get data from Arduino Sensor


def update_sensor(request):

    if request.method == "POST":

        data = request.POST

        user_id = data['user_id']
        distance = data['distance']
        farm_password = data['farm_password']

        farm = Farm.objects.filter(farmer_id=user_id)

        # If there is only one farm (currently not allowed to have more than one)
        if len(farm) == 1:
            if farm_password != farm[0].farm_password:
                return JsonResponse({
                    "code": 401,
                    "status": "forbidden, Arduino Password Doesn't Match Farm Password",
                })

            # For simplicity we will assume that the container is a cube of equal sizes
            volume = farm[0].milk_container_volume
            # The side of a cube equals volume root 3
            container_sides = volume**(1/3)

            # The UltraSonic sensor has 4cm inaccuracy, and doesn't measure below 19cm, so 14 is our base-line

            milk_quantity = abs((int(distance) - 14))*container_sides**2

            milk = Milk(
                Farm_id=farm[0].id,
                quantity=milk_quantity,
            )

            milk.save()

            return JsonResponse({
                "code": 201,
                "status": "success",
            })
        else:
            return JsonResponse({
                "code": 500,
                "status": "USGE",
                "message": "this farmer has multiple farms"
            })
    else:
        return JsonResponse({
            "code": 500,
            "status": "USGE",
        })

# Get Milk Records


def get_milk(request):

    if request.method == "GET":
        user_id = request.GET['user_id']

        farm = Farm.objects.all().filter(farmer_id=user_id)

        milk_profile = Milk.objects.all().filter(Farm_id=farm[0].id)
        milk_profile_json = object_to_json(milk_profile)
        return JsonResponse({
            "code": 200,
            "status": "success",
            "milk profiles": milk_profile_json
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE",
    })

# Create A Feed Recipe


def create_recipe(request):
    if request.method == "POST":
        data = request.POST
        farmer_id = data['user_id']
        description = data['description']
        # Sanitize the data
        # Should be an array of ingredient ids
        ingredients = data['ingredients']
        ingredients = ingredients.strip('[]')
        ingredients = ingredients.split(',')

        farm = Farm.objects.filter(farmer_id=farmer_id).get()

        recipe = Recipe(
            farm_id=farm.id,
            description=description,
        )
        recipe.save()

        for ingredient in ingredients:
            recipe.ingredients.add(int(ingredient))

        return JsonResponse({
            "code": 201,
            "status": "success"
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# get farm Recipe


def get_recipe(request):
    if request.method == "GET":
        user_id = request.GET['user_id']
        farm = Farm.objects.filter(farmer_id=user_id)
        recipe = Recipe.objects.filter(farm_id=farm[0].id).get()
        ingredients = recipe.ingredients.all()
        ingredients_json = object_to_json(ingredients)
        return JsonResponse({
            "code": 200,
            "status": "success",
            "Feed Recipe": ingredients_json
        })
