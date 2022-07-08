# Farmer Actions 

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ..middleware.usersmiddleware import user_type_authorizer

# necessary models

from ...farms.models import Farm

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

        name = data['name']
        farmer_Id = data['user_id']

        farm = Farm(
            name=name,
            farmer_Id=farmer_Id,
            feeds_Id=None
        )
