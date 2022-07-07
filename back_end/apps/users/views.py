from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Import necessary models
from .models import User

# Functions

@csrf_exempt # Bypass CSRF

def sign_up(request):

    if request.method == "POST":
        
        user_check = User.objects.check(email__exact=request.POST['email'])
        
        if user_check:

            return JsonResponse({
                "code": 208,
                "status": "sser already registered",
            })

        elif not user_check:
            data = request.POST
            name = (data['name'])
            email = (data['email'])
            password = hash(data['password'])
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

            return JsonResponse({
                "code": 201,
                "status": "success",
                "message": "user registered"
            })

    return JsonResponse({
        "code": 500,
        "Status": "Unsupported GET request"
    })

def sign_in(request):
    
    if request.method == "POST":
        
        auth_user = User.objects.get(email__exact=request.POST['email'])
        
        if auth_user:
            
            password = hash(request.POST['password'])

            if password == auth_user.password:

                return JsonResponse({
                    "code": 200,
                    "status": "success",
                    "User": auth_user,
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