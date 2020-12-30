import { Button } from "bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import "./Item.scss";

function Item({ item }) {
  return (
    <div id="Item">
      <Card>
        <Card.Img variant="top" src={item.picture} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.model} {item.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {" "}
          <Button content={`Detalle`} path={`/detail/${item.id}`} />{" "}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Item;
