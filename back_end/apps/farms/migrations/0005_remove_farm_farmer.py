# Generated by Django 4.0.5 on 2022-07-27 14:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('farms', '0004_alter_farm_farmer'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='farm',
            name='farmer',
        ),
    ]
