
import {Table} from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import  "../App.css";
import {Button, ButtonToolBar} from 'react-bootstrap';
import{getProducts, deleteProduct} from '../services/ProduitsServices';
import AddProductModal from './AddProductModal';
import UpdateProductModal from './UpdateProductModal';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Form, InputGroup} from 'react-bootstrap';


import React, { useEffect, useState } from 'react';

const Manage = () =>{
    // Etat pour stocker la liste des produits
    const [products, setProducts]=useState([]);
    // Etats pour gérer les modals d'ajout et de mise à jour
    const [addModalShow, setAddModalShow]=useState(false);
    const [editModalShow, setEditModalShow]=useState(false);
    const [editProduct, setEditProduct]=useState([]);
    // Etat pour gérer la mise à jour des produits
    const [isUpdated, setIsUpdated] = useState(false);
    // Utilisation d'un effet pour charger les produits depuis l'API
    useEffect(() => {
        let mounted = true;
    // Si la liste des produits est déjà chargée et qu'elle n'a pas besoin d'être mise à jour, on sort de l'effet
        if (products.length && !isUpdated){
            return;
        }
        // Récupération des produits depuis l'API
        getProducts()
            .then(data =>{
            if (mounted){
            setProducts(data)
            }
            })
         // Nettoyage de l'effet lors du démontage du composant
        return () => {
            mounted = false
            setIsUpdated(false);
           };

    }, [isUpdated, products]);
    // Fonction de gestion de l'ajout d'un produit
    const handleAdd = (e) => {
        e.preventDefault();
        setAddModalShow(true);
    };
    // Fonction de gestion de la mise à jour d'un produit
     const handleUpdate = (e, pro) => {
        e.preventDefault();
        setEditModalShow(true);
        setEditProduct(pro);
    };
     // Fonction de gestion de la suppression d'un produit
    const handleDelete = (e, id) => {
        if(window.confirm('Etes vous sûre ?')){
            e.preventDefault();
            deleteProduct(id)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
             (error)=>{
                alert("impossible de supprimer le produit");
           })

         }
    };
    // Fonction de fermeture du modal d'ajout
    let AddModalClose = () =>setAddModalShow(false);
    // Fonction de fermeture du modal de mise à jour
    let EditModalClose = () =>setEditModalShow(false);
    return (
    <div className="row side-row">

     <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prix Unitaire</th>
              <th>Quantité</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((pro) =>
            <tr key={pro.id + "-" + pro.nom}>
              <td>{pro.id}</td>
              <td>{pro.nom}</td>
              <td>{pro.prix_unitaire}</td>
              <td>{pro.quantite}</td>
               <td>
               <Button className='mr-2' variant="danger"
                onClick={event => handleDelete(event,pro.id)}>
                 <RiDeleteBin5Line />
                </Button>
                 <span>&nbsp;&nbsp;</span>
                <Button className='mr-2' variant="warning"
                onClick={event => handleUpdate(event,pro)}>
                      <FaEdit />
                </Button>

                <UpdateProductModal show={editModalShow} onHide={EditModalClose} product={editProduct}
                 setUpdated={setIsUpdated} />



               </td>

            </tr>)}


          </tbody>
        </Table>
        <ButtonToolbar>
         <Button variant="primary" onClick={handleAdd}>Ajouter Produit</Button>{' '}
         <AddProductModal show={addModalShow} onHide ={AddModalClose} setUpdated={setIsUpdated}>
         </AddProductModal>
        </ButtonToolbar>
        </div>
      );
};
export default Manage;
