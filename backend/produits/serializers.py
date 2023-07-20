from rest_framework import serializers
from .models import Produits

class ProduitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produits
        fields = ('id',
                  'nom',
                  'prix_unitaire',
                  'quantite')
