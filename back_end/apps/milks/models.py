from django.db import models

class milk(models.model):
    quantity = models.IntegerField()
    

    # foreign key
    animal_Id = models.IntegerField()

    class Meta:
        db_table = "Milk_Profiles"