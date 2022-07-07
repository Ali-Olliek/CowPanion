from django.db import models

class Feed(models.Model):
    
    name = models.CharField(max_length=50)
    Type = models.CharField(max_length=50, null=True, blank=True)


    class Meta:
        db_table = "Feeds"
