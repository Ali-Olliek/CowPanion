# Generated by Django 4.0.5 on 2022-07-07 05:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('users', '0001_initial'),
        ('feeds', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Farm',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('farmer_Id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user')),
                ('feeds_Id', models.ManyToManyField(to='feeds.feed')),
            ],
            options={
                'db_table': 'Farms',
            },
        ),
    ]
