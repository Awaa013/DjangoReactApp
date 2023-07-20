import React from 'react';
import {Button, Modal, Row,Col, Form} from 'react-bootstrap';
import{ addProduct } from '../services/ProduitsServices';
const AddProductModal = (props) => {

       const handleSubmit = (e) => {
          e.preventDefault();
          addProduct(e.target)
            .then(
              (result) => {
                alert(result);
                props.setUpdated(true);
              },
              (error) => {
                alert("Impossible d'ajouter un produit");
              }
            );
    };

    return(
        <div className='container'>
          <Modal {...props}
           size="lg"
           aria-labelledby="contained-modal-title-vcenter"
           centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">Détails Produit</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Row>
                <Col sm={6}>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="nom">
                      <Form.Label>Nom du produit</Form.Label>
                      <Form.Control type="text" name="nom" required placeholder="" />
                    </Form.Group>
                    <Form.Group controlId="prix_unitaire">
                      <Form.Label>Prix unitaire</Form.Label>

                      <Form.Control
                        type="text"
                        name="prix_unitaire"
                        required
                        pattern="^\d+(\.\d{1,2})?$"
                        title="Saisissez un prix valide (par exemple: 10 ou 5.99)"
                        onChange={(e) => {
                          const value = e.target.value;
                          // Vérifier que la valeur saisie est numérique ou vide
                          if (!value || /^\d+(\.\d{0,2})?$/.test(value)) {
                            // Mettre à jour l'état ou l'action du formulaire avec la valeur saisie
                          }
                        }}
                        placeholder=""
                      />
                    </Form.Group>
                    <Form.Group controlId="quantite">
                      <Form.Label>Quantité</Form.Label>
                      <Form.Control type="number" name="quantite" required placeholder="" />
                    </Form.Group>
                    <Form.Group>
                      <p></p>
                      <Button variant="primary" type="submit">
                        Ajouter
                      </Button>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
  {/* Footer content, if any */}
</Modal.Footer>

          </Modal>
        </div>
    );
};

export default AddProductModal;
