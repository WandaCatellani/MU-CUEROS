import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { getFirestore } from "../../backend/firebase/Firebase";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("categories");
    itemsCollection
      .get()
      .then((res) => {
        res.forEach((category) => {
          setCategories((categories) => [
            ...categories,
            { id: category.id, ...category.data() },
          ]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Navbar className="nav" expand="md">
      <NavLink to="/" className="navLogo">
        <img src={logo} alt="logo" />
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="navLink" to="/">
            Home
          </NavLink>

          <NavLink className="navLink" to="/categories">
            Tienda
            {/* <ul>
            {categories.length > 0
              ? categories.map((category) => {
                  return (
                    <NavLink
                      className="nav-link"
                      to={`/categorias/${category.key}`}
                      key={category.id}
                    >
                      {category.key}
                    </NavLink>
                  );
                })
              : null}
            </ul> */}
          </NavLink>

          <NavDropdown title="TIENDA" id="basic-nav-dropdown">
            {categories.length > 0
              ? categories.map((category) => {
                  return (
                    <NavLink
                      className="nav-link"
                      to={`/categorias/${category.key}`}
                      key={category.id}
                    >
                      {category.key}
                    </NavLink>
                  );
                })
              : null}
            {/* <NavLink to={`/categoty/${categoria.key}`}>{categoria.key}</NavLink>
            <NavLink to={`/categoty/${categoria.key}`}>{category.key}</NavLink>
            <NavLink to={`/categoty/${categoria.key}`}>{category.key}</NavLink>
            <NavDropdown.Divider />
            <NavLink to={"/categories"}>Ver Mas</NavLink> */}
          </NavDropdown>

          <NavLink className="navLink" to="#">
            Sobre Nosotros
          </NavLink>

          <NavLink className="navLink" to="#">
            Contacto
          </NavLink>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

/* <div>
  <ul>
    <li>
      <div>Categorias</div>
      <div>
        <Link to={`/categories/key1`}>
          <div>key1</div>
        </Link>
        <Link to={`/categories/key2`}>
          <div>key1</div>
        </Link>
        <Link to={`/categories/key3`}>
          <div>key1</div>
        </Link>
      </div>
    </li>
  </ul>
</div>; */
