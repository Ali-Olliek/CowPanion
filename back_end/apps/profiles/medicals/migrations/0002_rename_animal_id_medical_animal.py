# Generated by Django 4.0.5 on 2022-07-08 10:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('medicals', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='medical',
            old_name='animal_Id',
            new_name='animal',
        ),
    ]
