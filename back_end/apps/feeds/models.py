from unicodedata import category
from django.db import models

class Feed(models.Model):
    
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50, null=True, blank=True)
    crude_protein_CP = models.FloatField(null=True, blank=True)
    ether_extract_EE = models.FloatField(null=True, blank=True)
    crude_fibre_CF = models.FloatField(null=True, blank=True)
    nitrogen_free_extract_NFE = models.FloatField(null=True, blank=True)
    neutral_detergent_fibre_NDF = models.FloatField(null=True, blank=True)
    acid_detergent_fibre_ADF = models.FloatField(null=True, blank=True)
    mineral_content_ASH = models.FloatField(null=True, blank=True)

    class Meta:
        db_table = "Feeds"