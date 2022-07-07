from django.shortcuts import render
from django.http import JsonResponse

# Import necessary models
from .models import User

# Functions

# Sign Up

def sign_up(request):

    if request.method == "POST":
        name = (request.POST['name'])
        email = (request.POST['email'])
        password = hash(request.POST['password'])
        DOB = (request.POST['DOB'])
        user_type = (request.POST['user_type'])

        user = User(name, email, password, DOB, user_type)
        user.save()

        return JsonResponse({
            "code": 200,
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