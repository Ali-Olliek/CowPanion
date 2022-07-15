from django.db import models
from ..users.models import User
from ..feeds.models import Feed
from ..recipes.models import Recipe

class Farm (models.Model):
    name = models.CharField(max_length=255) # => we can default farm name to farmer's name
    location = models.CharField(max_length=255, default=0)
    milk_container_volume = models.IntegerField(default=None)
    farm_password = models.CharField(max_length=255, default=None) # => This Password will authenticate the Arduino Code Later On
    
    # Model Relations
    farmer = models.ForeignKey(User, on_delete=models.CASCADE)
    feeds = models.ManyToManyField(Feed)

    class Meta:
        db_table = "Farms"