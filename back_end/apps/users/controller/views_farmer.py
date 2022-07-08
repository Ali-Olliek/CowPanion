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


