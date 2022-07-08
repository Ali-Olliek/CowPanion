from django.db import models
from ...animals.models import Animal

class Medical(models.Model):
    
    procedure_description = models.CharField(max_length=255)
    medication = models.CharField(max_length=255)
    done_at = models.DateTimeField(auto_now_add=True)

    # foreing key
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)

    class Meta:
        db_table = "Medical_Histories"