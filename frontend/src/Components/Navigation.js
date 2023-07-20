import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from "../static/produitsLogo.png"
import "../App.css";
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
  return (
    <div>
    {/* Barre de navigation */}
    <Navbar className="navbar-custom" variant="dark" expand="lg" style={{ backgroundColor: '#0d47a1' }}>
      <Navbar.Brand className="app-logo" href="/">
        <img
          src={logo}
          width="40"
          height="50"
          className="d-inline-block align-center"
          alt="Application de Gestion De Produits"
        />{' '}
        Application De Gestion De Produits
      </Navbar.Brand>
    </Navbar>
    {/* Barre latérale */}
    <div className='sidebar'>
   <CDBSidebar textColor="#ffa726" backgroundColor="#0d47a1">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Navigation</CDBSidebarHeader>
      {/* Contenu de la barre latérale */}
      <CDBSidebarContent>
        <CDBSidebarMenu>
         {/* Lien vers la page d'accueil */}
          <NavLink exact to="/" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="home">Accueil</CDBSidebarMenuItem>
        </NavLink>
         {/* Lien vers la page produits */}
        <NavLink exact to="/produits" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="list">Liste Des Produits</CDBSidebarMenuItem>
        </NavLink>
         {/* Lien vers la page de gestion des produits */}
        <NavLink exact to="/gestion" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user" iconType="solid">Gestion Des Produits</CDBSidebarMenuItem>
        </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>


       
    </div>
   </div>
  );
};

export default Navigation;
