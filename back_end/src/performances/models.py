from django.db import models

class Performance(models.model):
    weight = models.IntegerField()
    status = models.CharField(max_length=40)

    # foreign key
    animal_Id = models.IntegerField()