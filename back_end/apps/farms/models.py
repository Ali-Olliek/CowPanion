from django.db import models
from ..users.models import User
from ..feeds.models import Feed

class Farm (models.Model):
    name = models.CharField(max_length=255) # => we can default farm name to farmer's name
    
    #Foreign Key 
    farmer = models.ForeignKey(User, on_delete=models.CASCADE)
    feeds = models.ManyToManyField(Feed)

    class Meta:
        db_table = "Farms"