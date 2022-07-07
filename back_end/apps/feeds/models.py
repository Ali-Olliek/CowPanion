from django.db import models
from compositions.models import Composition

class Feed(models.Model):
    
    name = models.CharField(max_length=50)
    Type = models.CharField(max_length=50, null=True, blank=True)


    class Meta:
        db_table = "Feeds"
