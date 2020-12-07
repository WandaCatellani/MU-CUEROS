import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar className="nav" expand="lg">
      <Navbar.Brand href="#">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
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