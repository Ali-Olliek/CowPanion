# Generated by Django 4.0.5 on 2022-07-15 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('milks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='milk',
            name='day',
            field=models.DateField(auto_now_add=True, null=True),
        ),
    ]
