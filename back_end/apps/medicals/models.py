from django.db import models

class Medical(models.Model):
    procedure_description = models.CharField(max_length=255)
    medication = models.CharField(max_length=255)
    done_at = models.DateTimeField(auto_now_add=True)

    # foreing key
    animal_Id = models.IntegerField()

    class Meta:
        db_table = "Medical_Histories"