import axios from 'axios';
// Fonction pour récupérer tous les produits depuis l'API
export function getProducts(){
    return axios.get('http://127.0.0.1:8000/produits/')
    .then (response => response.data)
}

// Fonction pour ajouter un nouveau produit à l'API
export function addProduct(produit){
    return axios.post('http://127.0.0.1:8000/produits/',
    {
    id:null, // L'ID du produit sera généré automatiquement par l'API
    nom: produit.nom.value,
    prix_unitaire:produit.prix_unitaire.value,
    quantite:produit.quantite.value
    })
    .then (response => response.data)
}
// Fonction pour mettre à jour un produit existant dans l'API
export function updateProduct(proid, produit){
    return axios.put('http://127.0.0.1:8000/produits/' +proid,
    {
    nom: produit.nom.value,
    prix_unitaire:produit.prix_unitaire.value,
    quantite:produit.quantite.value
    })
    .then (response => response.data)
}
// Fonction pour supprimer un produit de l'API
export function deleteProduct(id){
    return axios.delete('http://127.0.0.1:8000/produits/' +id,
    {
        method:'DELETE',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        }
    })

    .then (response => response.data)
}
