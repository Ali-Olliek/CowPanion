# Generated by Django 4.0.5 on 2022-07-24 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('animals', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='animal',
            name='weight',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
