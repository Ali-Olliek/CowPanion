from django.db import models
from ..animals.models import Animal

class Reminder(models.Model):
    
    due_time = models.DateTimeField()
    task_description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    
    # foreign keys
    animal_Id = models.ForeignKey(Animal, on_delete=models.CASCADE)
    
    class Meta:
        db_table = "Reminders"