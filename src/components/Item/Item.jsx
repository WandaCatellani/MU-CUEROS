/* import React from "react";
import Card from "react-bootstrap/Card";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.scss";

function Item({ item }) {
  return (
    
      <Card  className="cards">
        <Link to={`/detail/${item.id}`}>
          <Card.Img
            className="card-img"
            variant="top"
            src={item.picture}
            alt="product"
          />
        </Link>

        <Card.Body>
          <Card.Title className="card-title">{item.title}</Card.Title>
          <Card.Text className="card-model">{item.model}</Card.Text>
          <Card.Text className="card-price">$ {item.price}</Card.Text>
        </Card.Body>

        <Card.Footer className="card-footer">
          <Button content={`Ver mas`} path={`/detail/${item.id}`} />
          <MdAddShoppingCart className="card-addProduct" />
        </Card.Footer>
      </Card>
    
  );
}

export default Item; */

import React from "react";
// import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.scss";

function Item({ item }) {
  return (
    <div className="animate__animated animate__zoomIn cards"> {/* animate__fadeInUp */}
      <Link to={`/detail/${item.id}`} className="a-img">
        <img className="card-img" src={item.picture} alt="product" />
        <h3 className="card-title">{item.title}</h3>

        <div className="content">
          <div className="size">
            <h4>Size</h4>
            <span>S</span>
            <span>M</span>
            <span>L</span>
          </div>

          <div className="colour">
            <h4>Color</h4>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <Button className="btn-card" content={`Ver`} path={`/detail/${item.id}`} />
        </div>
      </Link>
    </div>
  );
}

export default Item;
