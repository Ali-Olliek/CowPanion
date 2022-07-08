from django.db import models

class User(models.Model):
    
    name = models.CharField(max_length=45)
    email = models.CharField(max_length=45, unique=True)
    password = models.CharField(max_length=255)
    DOB = models.CharField(max_length=30)
    user_Type = models.SmallIntegerField(default=2)
    is_logged = models.BooleanField(default=False)

    # Change Default Naming of Tables
    class Meta:
        db_table = "Users"
