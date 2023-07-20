from django.db import models

# Modèle de base de données pour les produits
class Produits(models.Model):
    # Champ pour l'ID du produit, qui sera généré automatiquement
    id = models.AutoField(primary_key=True)
    # Champ pour le nom du produit, limité à 100 caractères maximum
    nom = models.CharField(max_length=100)
     # Champ pour le prix unitaire du produit, avec un maximum de 8 chiffres avant la virgule
    # et 2 chiffres après la virgule (pour les décimales)
    prix_unitaire = models.DecimalField(max_digits=8, decimal_places=2)
     # Champ pour la quantité du produit, représenté comme un entier
    quantite = models.IntegerField()

# Méthode pour renvoyer le nom du produit en tant que représentation de chaîne de caractères
    def __str__(self):
        return self.nom
