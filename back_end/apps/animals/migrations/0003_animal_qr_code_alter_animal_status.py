# Generated by Django 4.0.5 on 2022-07-12 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('animals', '0002_rename_farm_id_animal_farm'),
    ]

    operations = [
        migrations.AddField(
            model_name='animal',
            name='QR_code',
            field=models.TextField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='animal',
            name='status',
            field=models.CharField(max_length=50),
        ),
    ]