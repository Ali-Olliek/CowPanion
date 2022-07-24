from django.db import models
from ..farms.models import Farm


class Animal(models.Model):

    name = models.CharField(max_length=55)
    species = models.CharField(max_length=255)
    breed = models.CharField(null=True, blank=True, max_length=255)
    DOB = models.CharField(null=True, blank=True, max_length=255)
    status = models.CharField(max_length=50)
    status_updated_at = models.DateField(
        auto_now_add=True, blank=True, null=True)
    weight = models.IntegerField(blank=True, null=True)
    QR_code = models.TextField(default=None, null=True, blank=True)

    # Model Relations
    farm = models.ForeignKey(Farm, on_delete=models.DO_NOTHING)

    class Meta:
        db_table = "Animals"
