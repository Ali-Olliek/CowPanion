from django.contrib.auth import logout
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password, make_password
import jwt

# Import necessary models

from .models import User

# Response Status Codes
# 200 -- Request handled successfully
# 201 -- Created
# 208 -- Already Exists
# 500 -- General Internal Error

# Functions

@csrf_exempt # Bypass CSRF

def sign_up(request):

    if request.method == "POST":
        
        user_check = User.objects.get(email__exact=request.POST['email'])
        
        if user_check:

            # Already Registered
            return JsonResponse({
                "code": 208,
                "status": "user already registered",
            })
            
        elif not user_check:
            data = request.POST
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
        "Status": "Request Error"
    })


@csrf_exempt

def sign_in(request):
    
    if request.method == "POST":
        
        auth_user = User.objects.get(email__exact=request.POST['email'])
        
        if auth_user:

            password_valid = check_password(request.POST['password'], auth_user.password)

            if password_valid:
                
                jwt_token = jwt.encode({
                    "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30),
                    "user_id": auth_user.id,
                    "user_type": auth_user.user_Type,
                    "user_name": auth_user.name}, 
                    '18795',
                    algorithm="HS256")

                print(jwt_token)
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
                "status": "unsuccessful",
                "message": "Incorrect Password"
            })
            
        # User not found
        return JsonResponse({
            "code": 500,
            "status": "unsuccessful",
            "message": "user not found"
        })