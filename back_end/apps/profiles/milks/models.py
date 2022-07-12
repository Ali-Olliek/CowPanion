from django.db import models
from ...farms.models import Farm


class Milk(models.Model):

    quantity = models.IntegerField()
    fat_content = models.IntegerField()
    
    # Milk Profile's foreign key
    Farm = models.ForeignKey(Farm, on_delete=models.CASCADE)

    class Meta:
        db_table = "Milk_Profiles"