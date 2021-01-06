import React from "react";
import Card from "react-bootstrap/Card";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.scss";

function Item({ item }) {
  return (
    <div id="Item" className="cards">
      <Card>
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
    </div>
  );
}

export default Item;
