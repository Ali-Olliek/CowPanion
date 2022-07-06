from django.db import models

class Reminder(models.Model):
    due_time = models.DateTimeField()
    task_description = models.CharField(max_length=255)

    # foreign keys
    animal_Id = models.IntegerField()
    
    class Meta:
        db_table = "Reminders"