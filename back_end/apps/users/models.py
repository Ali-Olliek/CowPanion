from django.db import models

class User(models.Model):
    name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    DOB = models.CharField(max_length=30)
    user_Type = models.SmallIntegerField()

    # Change Default Naming of Tables
    class Meta:
        db_table = "Users"
