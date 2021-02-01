import React from "react";
import "./CategoryDetail.scss";
import Item from "../Item/Item";
import Button from "../Button/Button";

const CategoryDetail = ({ product, category }) => {
  return (
    <>
      <div>
        <h1 className="category__title "> {category}</h1>
        <div id="CategoryDetail" className="category container">
          {product ? (
            product.map((product, i) => {
              return <Item item={product} key={i} />;
            })
          ) : (
            <div>
              <h3>Actualmente no tienes artículos en esta {category}</h3>
              <Button path="/" content="Volver a comprar" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
