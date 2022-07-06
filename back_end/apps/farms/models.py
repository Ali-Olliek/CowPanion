from django.db import models

class Farm (models.Model):
    name = models.CharField(max_length=255) # => we can default farm name to farmer's name
    
    #Foreign Key 
    farmer_Id = models.IntegerField()

    class Meta:
        db_table = "Farms"