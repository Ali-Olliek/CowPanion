from django.db import models

class Performance(models.Model):
    weight = models.IntegerField()
    status = models.CharField(max_length=40)

    # foreign key
    animal_Id = models.IntegerField()

    class Meta:
        db_table = "Performance_Profiles"
