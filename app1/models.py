from django.db import models

# Create your models here.
class User(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=350)
    link = models.CharField(max_length=150)
    email = models.EmailField(max_length=254)

    Picture = models.CharField(max_length=50)
 