from re import L
from django.db import models

class Composition(models.Model):
    energy = models.DecimalField(max_digits=5, decimal_places=2)
    protein_content = models.DecimalField(max_digits=5, decimal_places=2)
    DM_content = models.DecimalField(max_digits=5, decimal_places=2)
    CF_content = models.DecimalField(max_digits=5, decimal_places=2)
    Minerals = models.CharField(max_length=255)
    vitamins = models.CharField(max_length=255)
    
    class Meta:
        db_table = "Feed_Compositions"