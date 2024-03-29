# Generated by Django 4.0.5 on 2022-07-16 06:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('feeds', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(max_length=255)),
                ('ingredients', models.ManyToManyField(to='feeds.feed')),
            ],
            options={
                'db_table': 'Recipes',
            },
        ),
    ]
