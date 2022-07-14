from unicodedata import category
from django.db import models

class Feed(models.Model):
    
    name = models.CharField(max_length=50)
    category = models.CharField(max_length=50, null=True, blank=True)
    crude_protein_CP = models.CharField(max_length=50,null=True, blank=True, default=0)
    ether_extract_EE = models.CharField(
        max_length=50, null=True, blank=True, default=0)
    crude_fibre_CF = models.CharField(
        max_length=50, null=True, blank=True, default=0)
    nitrogen_free_extract_NFE = models.CharField(
        max_length=50, null=True, blank=True, default=0)
    neutral_detergent_fibre_NDF = models.CharField(
        max_length=50, null=True, blank=True, default=0)
    acid_detergent_fibre_ADF = models.CharField(
        max_length=50, null=True, blank=True, default=0)
    mineral_content_ASH = models.CharField(
        max_length=50, null=True, blank=True, default=0)
    Lignin = models.CharField(
        max_length=50, null=True, blank=True, default=0)
    Metabolizable_Energy_ME = models.CharField(
        max_length=50, null=True, blank=True, default=0)

    class Meta:
        db_table = "Feeds"