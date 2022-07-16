from django.db import models
from ..feeds.models import Feed
from ..farms.models import Farm

class Recipe(models.Model):

    description = models.CharField(max_length=255)

    # Model Relations
    ingredients = models.ManyToManyField(Feed)
    farm = models.OneToOneField(Farm, on_delete=models.CASCADE)

    class Meta:
        db_table = "Recipes"
