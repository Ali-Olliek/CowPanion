"""back_end URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from apps.users.controller import views as users_controller
from apps.users.controller import views_farmer as farmers_controller
from apps.users.controller import views_admin as admins_controller

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/signUp/', users_controller.sign_up, name='sign_up'),
    path('api/v1/signIn/', users_controller.sign_in, name='sign_in'),
    path('api/v1/EditProfile/', users_controller.update_user_info, name='update_user'),
    path('api/v1/createFarm/', farmers_controller.create_farm , name='create_farm'),
]
