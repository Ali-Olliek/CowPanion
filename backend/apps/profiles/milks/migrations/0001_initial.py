# Generated by Django 4.0.5 on 2022-07-16 06:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('farms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Milk',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('fat_content', models.IntegerField(blank=True, null=True)),
                ('day', models.DateField(auto_now_add=True, null=True)),
                ('Farm', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='farms.farm')),
            ],
            options={
                'db_table': 'Milk_Profiles',
            },
        ),
    ]