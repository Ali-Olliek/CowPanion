from django.db import models
from farms.models import Farm

class Animal(models.Model):
    
    name = models.CharField(max_length=55)
    species = models.CharField(max_length=255)
    breed = models.CharField(null=True, blank=True, max_length=255)
    DOB = models.CharField(null=True, blank=True, max_length=255)
    status = models.SmallIntegerField()

    # Animal's Foreign Keys
    farm_Id = models.ForeignKey(Farm, on_delete=models.CASCADE)

    class Meta: 
        db_table = "Animals" 

    