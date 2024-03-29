# Admin Actions
import re
import json
from django.http import JsonResponse
from django.core.serializers import serialize
from utils.utility_functions import scrape_data, object_to_json

# Necessary Models

from ...users.models import User
from ...farms.models import Farm
from ...animals.models import Animal
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

# Functions

# Get all users in database (Farmers, and Vets)


def get_users(request):

    if request.method == "GET":

        users = User.objects.all().values('name', 'email', 'DOB',
                                          'id', 'phone_number', 'user_Type')

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

        animals = Animal.objects.all().values(
            'id', 'farm_id', 'name', 'DOB', 'status', 'breed')

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
        animals = Animal.objects.all().filter(farm_id=farm_id).values(
            'id', 'farm_id', 'name', 'DOB', 'status', 'breed')

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

# Get All Farms


def get_farms(request):

    if request.method == "GET":

        farms = Farm.objects.all().values('id', 'name')
        farms_list = []
        for farm in farms:
            farms_list.append(farm)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "farms": farms_list
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# Call Function to Update Data


def update_feed_data(request):

    if request.method == "GET":
        scrape_data()

        return JsonResponse({
            "code": 200,
            "status": "success"
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# fill data to database


def add_feed_data(request):

    with open('utils/feeds.json') as file:

        data = json.load(file)

        for i in data:

            name = i['Ingredient']
            CP = i['CP (%)']
            EE = i['EE (%)']
            CF = i['CF (%)']
            NFE = i['NFE (%)']
            ASH = i['Ash (%)']
            NDF = i['NDF (%)']
            ADF = i['ADF (%)']
            Lignin = i['Lignin (%)']
            ME = i['ME(Mcal/kg)']

            # If a row has no values, it is a category title
            if None in (name, CP, EE, CF, NFE, ASH, NDF, ADF, Lignin, ME):
                continue

            feed = Feed(
                name=name,
                crude_protein_CP=CP,
                ether_extract_EE=EE,
                crude_fibre_CF=CF,
                nitrogen_free_extract_NFE=NFE,
                mineral_content_ASH=ASH,
                neutral_detergent_fibre_NDF=NDF,
                acid_detergent_fibre_ADF=ADF,
                Lignin=Lignin,
                Metabolizable_Energy_ME=ME,
            )

            feed.save()

        return JsonResponse({
            "code": 201,
            "status": "success"
        })

# get Feeds Data


def get_feeds(request):

    if request.method == "GET":

        feeds = Feed.objects.all().values(
            'crude_protein_CP', 'name').order_by('-crude_protein_CP')[3:8]
        feeds_list = []
        for feed in feeds:
            feeds_list.append(feed)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "feeds": feeds_list
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# get only locations of registered farms


def get_farm_locations(request):
    if request.method == "GET":
        farms = Farm.objects.all().values('location', 'name')
        farms_location = []
        for location in farms:
            farms_location.append(location)
        return JsonResponse({
            "code": 200,
            "status": "success",
            "farms": farms_location
        })
    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# get general stats


def get_admin_stats(request):

    if request.method == "GET":

        vets = User.objects.filter(user_Type=3).count()
        farmers = User.objects.filter(user_Type=2).count()
        farms = Farm.objects.count()
        animals = Animal.objects.count()

        return JsonResponse({
            "code": 200,
            "status": "success",
            "data": {
                "Farmers": farmers,
                "Veterinarians": vets,
                "Farms": farms,
                "Animals": animals
            }
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })
