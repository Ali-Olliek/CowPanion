from django.contrib import admin
from django.urls import path, re_path
from apps.users.controller import views as users_controller
from apps.users.controller import views_farmer as farmers_controller
from apps.users.controller import views_admin as admins_controller
from apps.users.controller import views_vet as vet_controller

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # All Users
    path('api/v1/signUp/', users_controller.sign_up, name='sign_up'),
    path('api/v1/signIn/', users_controller.sign_in, name='sign_in'),
    path('api/v1/EditProfile/', users_controller.update_user_info, name='update_user'),

    # Farmer
    path('api/v1/createFarm/', farmers_controller.create_farm , name='create_farm'),
    path('api/v1/addAnimal/', farmers_controller.add_animal, name='add_animal'),
    path('api/v1/animals/', farmers_controller.get_all_animals, name='get_animals'),
    path('api/v1/animal/', farmers_controller.get_animal, name='get_animal'),
    path('api/v1/animal/update/', farmers_controller.update_animal_status, name='update_status'),
    path('api/v1/createReminder/', farmers_controller.create_reminder, name='create_reminder' ),
    path('api/v1/farmReminders/', farmers_controller.get_farm_reminders, name='get_farm_reminders'),
    path('api/v1/animalReminders/', farmers_controller.get_animal_reminders, name='get_animal_reminders'),

    # Admin
    path('api/v1/adminGetUsers/', admins_controller.get_users, name='admin_get_users'),
    path('api/v1/adminGetAnimals/', admins_controller.get_all_animals, name='admin_get_animals'),
    path('api/v1/adminFarmAnimals/', admins_controller.get_farm_animals, name='admin_farm_animals'),
    path('api/v1/adminGetFarms/', admins_controller.get_farms, name='get_farms'),
    path('api/v1/addFeed/', admins_controller.add_feed_data, name='add_feed'),

    # Vet
    path('api/v1/updateMedicalRecord/', vet_controller.update_medical_history, name='update_medicals')
]
