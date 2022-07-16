from django.db import models
from ..feeds.models import Feed

class Recipe(models.Model):

    description = models.CharField(max_length=255)

    # Model Relations
    ingredients = models.ManyToManyField(Feed)

    class Meta:
        db_table = "Recipes"
