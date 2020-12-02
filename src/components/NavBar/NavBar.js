import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Navbar.Brand href="#">Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
          <NavDropdown.Item title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Mejor valorados</NavDropdown.Item>
            <NavDropdown.Item href="#">Mas buscados</NavDropdown.Item>
            <NavDropdown.Item href="#">Ofertas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Todos</NavDropdown.Item>
          </NavDropdown.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;