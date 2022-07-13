# Veterinary Actions

# Necessary Models

from django.http import JsonResponse
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