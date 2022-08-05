# Veterinary Actions

from django.http import HttpResponse, JsonResponse
from utils.utility_functions import object_to_json


# Necessary Models

from ...animals.models import Animal
from apps.profiles.medicals.models import Medical
from ...farms.models import Farm

# Functions


def update_medical_history(request):

    if request.method == "POST":

        data = request.POST

        description = data['description']
        medication = data['medication']
        done_at = data['done_at']
        animal_id = data['animal_id']

        medical_procedure = Medical(
            procedure_description=description,
            medication=medication,
            done_at=done_at,
            animal_id=animal_id
        )

        medical_procedure.save()

        return JsonResponse({
            "code": 201,
            "status": "success"
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# get medical history


def get_medical_history(request):

    if request.method == "GET":

        animal_id = request.GET['animal_id']
        medical_history = Medical.objects.filter(animal_id=animal_id)

        medical_history_json = object_to_json(medical_history)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "medical_history": medical_history_json
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })

# get animals from farms assinged to Vet


def get_farm_animals(request):
    if request.method == "GET":
        vet_id = request.GET['vet_id']
        assigned_farms = Farm.objects.all().filter(vet=vet_id)
        all_animals = []
        # From this I get QuerySets with Values In them (Value is the record itself)
        for farm in assigned_farms:
            animals = Animal.objects.all().filter(
                farm_id=farm.pk).values('name', 'status', 'id', 'DOB')
            all_animals.append(animals)
        # I take the value from each querySet and append it to a new list
        animal_data = []
        for querySet in all_animals:
            for value in querySet:
                animal_data.append(value)

        return JsonResponse({
            "code": 200,
            "status": "success",
            "animals": animal_data
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })
