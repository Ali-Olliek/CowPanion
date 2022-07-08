from django.db import models
from ...animals.models import Animal

class Milk(models.Model):

    quantity = models.IntegerField()
    
    # Milk Profile's foreign key
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)

    class Meta:
        db_table = "Milk_Profiles"