from rest_framework.views import APIView
from .serializers import ProduitsSerializer
from django.http.response import JsonResponse
from django.http.response import Http404
from rest_framework.response import Response
from .models import Produits

class ProduitsView(APIView):

    # Méthode pour obtenir un produit spécifique en fonction de son ID (primary key)
    def get_produit(self,pk):
        try:
            produit = Produits.objects.get(id=pk)
            return produit
        except Produits.DoesNotExist():
            raise JsonResponse("Ce produit n'hexiste pas", safe=False)
    # Méthode pour gérer la requête GET, afficher tous les produits ou un produit spécifique
    def get(self,request, pk=None):
        if pk:
            # Si un ID est fourni, renvoyer les détails du produit spécifique
            data = self.get_produit(pk)
            serializer = ProduitsSerializer(data)
        else:
            # Sinon, renvoyer tous les produits
            data = Produits.objects.all()
            serializer = ProduitsSerializer(data, many=True)
        return Response(serializer.data)

     # Méthode pour gérer la requête POST, ajouter un nouveau produit
    def post(self, request):
        data = request.data
        serializer = ProduitsSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Produit créé avec succès', safe=False)
        return JsonResponse('Echec lors de l ajout du produit', safe=False)

    # Méthode pour gérer la requête PUT, mettre à jour un produit spécifique en fonction de son ID
    def put(self,request,pk=None):
        produit_to_update = Produits.objects.get(id=pk)
        serializer = ProduitsSerializer(instance=produit_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Produit mise à jour avec succès', safe=False)
        return JsonResponse('Echec lors de la mise à jour du produit')
# Méthode pour gérer la requête DELETE, supprimer un produit spécifique en fonction de son ID
    def delete(self,request, pk=None):
        produit_to_delete = Produits.objects.get(id=pk)
        produit_to_delete.delete()
        return JsonResponse('Produit supprimé avec succès', safe=False)
