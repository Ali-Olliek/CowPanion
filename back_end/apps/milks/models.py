from django.db import models
from animals.models import Animal

class Milk(models.Model):

    quantity = models.IntegerField()
    
    # foreign key
    animal_Id = models.ForeignKey(Animal, on_delete=models.CASCADE)

    class Meta:
        db_table = "Milk_Profiles"