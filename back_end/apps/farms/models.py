from django.db import models
from ..users.models import User


class Farm (models.Model):
    # => we can default farm name to farmer's name
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, default=0)
    milk_container_volume = models.IntegerField(default=None)
    # => This Password will authenticate the Arduino Code Later On
    farm_password = models.CharField(max_length=255, default=None)
    vet = models.IntegerField(default=None, null=True, blank=True)
    # Model Relations
    farmer = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "Farms"
