# Generated by Django 4.0.5 on 2022-07-16 06:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45)),
                ('email', models.CharField(max_length=45, unique=True)),
                ('password', models.CharField(max_length=255)),
                ('DOB', models.CharField(max_length=30)),
                ('user_Type', models.SmallIntegerField(default=2)),
                ('is_logged', models.BooleanField(default=False)),
            ],
            options={
                'db_table': 'Users',
            },
        ),
    ]
