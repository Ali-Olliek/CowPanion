# Veterinary Actions

from django.http import JsonResponse
from utils.utility_functions import convert_to_json

# Necessary Models

from ...animals.models import Animal
from apps.profiles.medicals.models import Medical

# Functions

def update_medical_history(request):
    
    if request.method == "POST":

        data = request.POST

        description = data['description']
        medication = data['medication']
        done_at = data['done_at']
        animal_id = data['animal_id']

        medical_procedure = Medical (
            procedure_description = description,
            medication = medication,
            done_at = done_at,
            animal_id = animal_id
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
        medical_history = Medical.objects.filter(animal_id = animal_id)

        medical_history_json = convert_to_json(medical_history)
        
        return JsonResponse({
            "code": 200,
            "status": "success",
            "medical_history": medical_history_json
        })

    return JsonResponse({
        "code": 500,
        "status": "USGE"
    })