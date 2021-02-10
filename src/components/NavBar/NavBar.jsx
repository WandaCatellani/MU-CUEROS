import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
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
            <ul className="navLinkDropdown">
              {categories.length > 0
                ? categories.map((category) => {
                    return (
                      <NavLink
                        className="navLinkA"
                        to={`/categories/${category.key}`}
                        key={category.id}
                      >
                        {category.key}
                      </NavLink>
                    );
                  })
                : null}
            </ul>
          </NavLink>

          <NavLink className="navLink" to="/">
            Acerca de Nosotros
          </NavLink>

          <NavLink className="navLink" to="/">
            Contacto
          </NavLink>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

/* <NavDropdown title="TIENDA" id="basic-nav-dropdown">
  {categories.length > 0
    ? categories.map((category) => {
        return (
          <NavLink
            className="navLink"
            to={`/categories/${category.key}`}
            key={category.id}
          >
            {category.key}
          </NavLink>
        );
      })
    : null}
</NavDropdown>; */

/* <div>
  <ul>
    <li>
      <div>Categorias</div>
      <div className="lista">
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
