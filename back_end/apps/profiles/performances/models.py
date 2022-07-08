from turtle import ondrag
from django.db import models
from ...animals.models import Animal

class Performance(models.Model):
    
    weight = models.IntegerField()
    status = models.CharField(max_length=40)
    updated_at = models.DateTimeField(auto_now_add=True)

    # Performance's foreign key
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)

    class Meta:
        db_table = "Performance_Profiles"
