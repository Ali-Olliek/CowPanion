# Generated by Django 4.0.5 on 2022-07-15 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('milks', '0002_milk_day'),
    ]

    operations = [
        migrations.AlterField(
            model_name='milk',
            name='fat_content',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]