import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className="nav" expand="lg">
      <NavLink to="/">Logo</NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="li" to="#">
            Contacto
          </NavLink>
          
          <NavDropdown className="li" title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Mejor valorados</NavDropdown.Item>
            <NavDropdown.Item href="#">Mas buscados</NavDropdown.Item>
            <NavDropdown.Item href="#">Todos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Ofertas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
