from django.contrib import admin
from .models import  Produits

models_list = [Produits]
admin.site.register(models_list)
