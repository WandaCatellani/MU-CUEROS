import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productsDetails } from "../../Item/Item";
import ItemCount from "../../ItemCount/ItemCount";
import Spinner from "../../Spinner/Spinner";
import "./ItemDetail.scss";

function ItemDetail() {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const promise = new Promise((res, rej) => {
        res(productsDetails);
      });
      promise.then((productsDetails) => {
        setItem(productsDetails);
      });
    }, 1000);
  }, [id]);

  return (
    <div>
      {item.length === 0 ? (
        <Spinner />
      ) : (
        item.map((e) => {
          return (
            <div className="ItemDetail" key={e.id}>
              <img src={e.picture} alt="Product" />
              <p>Titulo: {e.title}</p>
              <div>
                {" "}
                <ItemCount />{" "}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ItemDetail;
