import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password, make_password
from ..middleware.usersmiddleware import user_type_authorizer
import jwt
import datetime

# Import necessary models

from ..models import User
from ...farms.models import Farm

# Response Status Codes For Internal Error Handling:
    # 200 -- Request handled successfully
    # 201 -- Created
    # 208 -- Already Exists
    # 500 -- General Internal Error
    # USGE -- Unsuccessful General Error
    # USOP -- Unsuccessful Old Password
    # USAR -- Unsuccessful Already Registered
    # USIP -- Unsuccessful Incorrect Password

# Functions

@csrf_exempt # Bypass CSRF

def sign_up(request):

    if request.method == "POST":
        
        data = request.POST

        user_check = User.objects.filter(email__exact=data['email']).exists()
        
        if user_check:

            # Already Registered
            return JsonResponse({
                "code": 208,
                "status": "USAR",
            })
            
        elif not user_check:

            name = (data['name'])
            email = (data['email'])
            password = make_password(data['password'])
            DOB = (data['DOB'])
            user_Type = (data.get('user_type', 2))

            user = User (
            name = name,
            email = email,
            password = password,
            DOB = DOB,
            user_Type = user_Type
            )
            
            user.save()

            # Success
            return JsonResponse({
                "code": 201,
                "status": "success",
                "message": "user registered"
            })

    # General Request Error
    return JsonResponse({
        "code": 500,
        "Status": "USGE"
    })

@csrf_exempt

def sign_in(request):

    if request.method == "POST":
        
        data = request.POST
        
        try:
            auth_user = User.objects.get(email__exact=data['email'])

        except:
            # User not found
            return JsonResponse({
                "code": 500,
                "status": "USNA",
                "message": "user not found"
            })

        else:

            password_valid = check_password(data['password'], auth_user.password)

            if password_valid:
                
                jwt_token = jwt.encode({
                    "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
                    "user_id": auth_user.id,
                    "user_type": auth_user.user_Type,
                    "user_name": auth_user.name}, 
                    '18795',
                    algorithm="HS256")

                # Success
                return JsonResponse({
                    "code": 200,
                    "status": "success",
                    "user_name": auth_user.name,
                    "user_type": auth_user.user_Type,
                    "token": jwt_token,
                })

            # Incorrect password
            return JsonResponse({
                "code": 500,
                "status": "USIP",
                "message": "Incorrect Password"
            })
            
@csrf_exempt
def update_user_info(request):
    
    if not user_type_authorizer(request):

        return JsonResponse({
            "code": 401,
            "status": "UNAUTH",
        })

    else:

        if request.method == "POST":
            
            data = request.POST

            new_name = data['new_name'],
            new_email = data['new_email'],
            print(new_email, new_name)
            
            user = User.objects.filter(id = data['user_id']).update(name=new_name, email=new_email)

            return JsonResponse({
                "code": 200,
                "status": "success",
                "user": user,
            })

        return JsonResponse({
            "code": 500,
            "status": "USGE",
        })

@csrf_exempt
def update_password(request):
    
    if request.method == "POST":

        data = request.POST
        password_valid = check_password(data['old_password'], user.password)

        if password_valid:
            user = User.objects.filter(id=data['user_id']).update(password=data['new_password'])

            return JsonResponse({
                "code": 200,
                "status": "success",
                "message": "password updated successfully"
            })
        
        return JsonResponse({
            "code": 500,
            "status": "USOP",
            "message": "old password doesn't match"
        })
    
    return JsonResponse({
        "code": 500,
        "status": "USGE",
        "message": "Check request method"
    })

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

        farm = Farm (
            name=name,
            farmer_Id=farmer_Id,
            feeds_Id=None
        )
