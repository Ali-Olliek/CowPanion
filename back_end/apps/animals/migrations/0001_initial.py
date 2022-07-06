# Generated by Django 4.0.5 on 2022-07-06 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=55)),
                ('species', models.CharField(max_length=255)),
                ('breed', models.CharField(blank=True, max_length=255, null=True)),
                ('DOB', models.CharField(blank=True, max_length=255, null=True)),
                ('status', models.SmallIntegerField()),
                ('farm_Id', models.IntegerField()),
                ('medical_history', models.IntegerField(blank=True, null=True)),
                ('performance_profile', models.IntegerField(blank=True, null=True)),
                ('milk_profile', models.IntegerField(blank=True, null=True)),
                ('reminders', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'db_table': 'Animals',
            },
        ),
    ]
