import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar className="nav" expand="lg">
      <Navbar.Brand href="#">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="li" href="#">Home</Nav.Link>
          <Nav.Link className="li" href="#">Contacto</Nav.Link>
          <NavDropdown className="li" title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Mejor valorados</NavDropdown.Item>
            <NavDropdown.Item href="#">Mas buscados</NavDropdown.Item>
            <NavDropdown.Item href="#">Todos</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Ofertas</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;