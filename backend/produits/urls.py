from django.contrib import admin
from django.urls import path
from .views import ProduitsView
urlpatterns = [
    # URL pour afficher tous les produits et ajouter un nouveau produit
    path('produits/', ProduitsView.as_view()),
    # URL pour afficher un produit spécifique
    path('produits/<int:pk>', ProduitsView.as_view())
]
