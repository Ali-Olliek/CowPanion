from django.db import models

class Feed(models.model):
    name = models.CharField(max_length=50)
    Type = models.CharField(max_length=50, null=True, blank=True)

    # foreing key
    composition_Id = models.IntegerField()

    class Meta:
        db_table = "Feeds"
