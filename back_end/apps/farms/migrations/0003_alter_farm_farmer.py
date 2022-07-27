# Generated by Django 4.0.5 on 2022-07-27 14:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_dob'),
        ('farms', '0002_remove_farm_recipe'),
    ]

    operations = [
        migrations.AlterField(
            model_name='farm',
            name='farmer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='farmer', to='users.user'),
        ),
    ]
