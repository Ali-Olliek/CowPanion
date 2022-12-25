from django.urls import path
from django.contrib import admin
from apps.users.controller.views import UsersController
from apps.users.controller.views_farmer import FarmersController
from apps.users.controller.views_admin import AdminController
from apps.users.controller.views_vet import VetsController

urlpatterns = [
    path('admin/', admin.site.urls),

    # All Users
    path('api/v1/signUp/', UsersController.sign_up, name='sign_up'),
    path('api/v1/signIn/', UsersController.sign_in, name='sign_in'),
    path('api/v1/EditProfile/', UsersController.update_user_info, name='update_user'),

    # Farmers
    path('api/v1/createFarm/', FarmersController.create_farm, name='create_farm'),
    path('api/v1/addAnimal/', FarmersController.add_animal, name='add_animal'),
    path('api/v1/animals/', FarmersController.get_all_animals, name='get_animals'),
    path('api/v1/animal/', FarmersController.get_animal, name='get_animal'),
    path('api/v1/animal/update/',FarmersController.update_animal_status, name='update_status'),
    path('api/v1/createReminder/', FarmersController.create_reminder, name='create_reminder'),
    path('api/v1/farmReminders/', FarmersController.get_farm_reminders,name='get_farm_reminders'),
    path('api/v1/animalReminders/',FarmersController.get_animal_reminders, name='get_animal_reminders'),
    path('api/v1/updateSensor/',FarmersController.update_sensor, name='update_sensor'),
    path('api/v1/getMilkProfiles/', FarmersController.get_milk, name='get_milk'),
    path('api/v1/createRecipe/',FarmersController.create_recipe, name='create_recipe'),
    path('api/v1/getRecipe/', FarmersController.get_recipe, name='get_recipe'),
    path('api/v1/deleteReminder/',FarmersController.delete_farm_reminder, name='delete_reminder'),
    path('api/v1/getGeneralStats/',FarmersController.get_general_stats, name="general_stats"),
    path('api/v1/getVets/', FarmersController.get_all_vets, name="get_vets"),


    # Admins
    path('api/v1/adminGetUsers/',AdminController.get_users, name='admin_get_users'),
    path('api/v1/adminGetAnimals/',AdminController.get_all_animals, name='admin_get_animals'),
    path('api/v1/adminFarmAnimals/',AdminController.get_farm_animals, name='admin_farm_animals'),
    path('api/v1/adminGetFarms/', AdminController.get_farms, name='get_farms'),
    path('api/v1/addFeed/', AdminController.add_feed_data, name='add_feed'),
    path('api/v1/getFeeds/', AdminController.get_feeds, name='get_feeds'),
    path('api/v1/getLocations/',AdminController.get_farm_locations, name='get_locations'),
    path('api/v1/adminStats/', AdminController.get_admin_stats, name='get_stats'),

    # Vets

    path('api/v1/updateMedicalRecord/',VetsController.update_medical_history, name='update_medicals'),
    path('api/v1/getMedicalRecord/',VetsController.get_medical_history, name='get_history'),
    path('api/v1/getAssignedAnimals/', VetsController.get_farm_animals, name='get_assigned_animals'),
]
