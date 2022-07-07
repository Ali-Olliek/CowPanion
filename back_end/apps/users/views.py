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
            "Code": 200,
            "Status": "success",
            "message": "user registered"
        })

    return JsonResponse({
        "Code": 500,
        "Status": "Unsupported GET request"
    })
