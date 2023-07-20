import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getProducts } from '../services/ProduitsServices';
import { FaSearch } from 'react-icons/fa';
import "./Products.css"; // Import the CSS file here
import "../App.css";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

    // Effectuer une requête pour récupérer la liste des produits depuis l'API
  useEffect(() => {
    let mounted = true;
    getProducts()
      .then(data => {
        if (mounted) {
        // Mettre à jour l'état 'products' avec les données récupérées depuis l'API
          setProducts(data);
        }
      })
      .catch(error => {
        console.error('Erreur lors du chargement des produits', error);
      });
     // Nettoyage de l'effet lors du démontage du composant
    return () => (mounted = false);
  }, []);
// Fonction de gestion de la recherche
 const handleSearch = () => {
  if (searchQuery.trim() === '') {
     // Si la recherche est vide, réinitialiser la liste des produits
    getProducts()
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Erreur lors du chargement des produits', error);
      });
  } else {
    // Si la recherche n'est pas vide, filtrer les produits en fonction de la recherche
    const filteredProducts = [...products];

    // La fonction normalize() permet de transformer le texte en utilisant la "normalisation" Unicode
     // Cela nous permet de rendre la recherche insensible aux accents et à la casse
    const normalizedSearchQuery = searchQuery
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    // Filtrer les produits en fonction du nom du produit
    const filteredResults = filteredProducts.filter(
      (product) =>
        product.nom
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .includes(normalizedSearchQuery)
    );
    // Mettre à jour la liste des produits affichés avec les résultats filtrés
    setProducts(filteredResults);
  }
};
// Fonction de réinitialisation de la recherche
const handleReset = () => {
  setSearchQuery('');
  // Réinitialiser la valeur de la recherche à une chaîne vide
    // Réafficher tous les produits en récupérant à nouveau la liste depuis l'API
  getProducts()
    .then(data => {
      setProducts(data);
    })
    .catch(error => {
      console.error('Erreur lors du chargement des produits', error);
    });
};

  return (
       <div className="row side-row">
      <div className="search-bar">
        <div className="search-input">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="search-icon" onClick={handleSearch} />
        </div>
        {searchQuery && (
          <button className="search-button" onClick={handleReset}>Réinitialiser</button>
        )}
      </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prix Unitaire</th>
                <th>Quantité</th>
              </tr>
            </thead>
            <tbody>
              {products.map((pro) => (
                <tr key={pro.id + "-" + pro.nom}>
                  <td>{pro.id}</td>
                  <td>{pro.nom}</td>
                  <td>{pro.prix_unitaire}</td>
                  <td>{pro.quantite}</td>
                </tr>
              ))}
            </tbody>
          </Table>
    </div>
  );
};

export default Products;
