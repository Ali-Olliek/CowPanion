from django.db import models

class Animal(models.model):
    name = models.CharField(max_length=55)
    species = models.CharField(max_length=255)
    breed = models.CharField(null=True, blank=True, max_length=255)
    DOB = models.CharField(null=True, blank=True, max_length=255)
    status = models.SmallIntegerField()

    # Animal's Foreign Keys
    farm_Id = models.IntegerField()
    medical_history = models.IntegerField(null=True, blank=True) 
    performance_profile = models.IntegerField(null=True, blank=True)
    milk_profile = models.IntegerField(null=True, blank=True)
    reminders = models.IntegerField(null=True, blank=True)

    class Meta: 
        db_table = "Animals" 