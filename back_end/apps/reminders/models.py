from django.db import models
from ..animals.models import Animal
from ..farms.models import Farm


class Reminder(models.Model):

    due_time = models.DateTimeField()
    task_title = models.CharField(max_length=255)
    task_description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    # Models Relations
    animal = models.ForeignKey(
        Animal, on_delete=models.CASCADE, null=True, blank=True, default=None)
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE, default=None)

    class Meta:
        db_table = "Reminders"
