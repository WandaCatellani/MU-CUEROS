import "./ItemDetail.scss";
import Button from "../../Button/Button";
import ItemCount from "../../ItemCount/ItemCount";
import { useState } from "react";
import useCartContext from "../../../context/CartContext";
import Section from "../../Section/Section";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const { addProduct } = useCartContext();

  const onAddItem = (counter) => {
    setQuantity(counter);
  };

  const addToCart = () => {
    // alert(`Agregaste ${quantity} ${product.title} al carrito`);
    addProduct(product, quantity);
  };

  return (
    <>
      <Section title="Detalle de productos" >
        <Button content={"Atras"} path={"/"} className="btn-atras" />
        <div className="text-center m-3 mt-5">
          <img className="item-img" src={product.picture} alt={"Imagen"} />

          <div className={"itemDetail"}>
            <h3 className={"item-title"}>{product.title}</h3>
            <h3 className={"item-model"}>Modelo: {product.model}</h3>
            <h4 className={"item-price"}>${product.price}</h4>
            <h6 className={"item-stock"}>Stock: {product.stock} unidades</h6>

            <ItemCount initialValue={1} maxValue={15} onAdd={onAddItem} />

            <Button
              className="item-btn"
              content={`Agregar al carrito ${quantity} ${product.model}`}
              callback={addToCart}
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default ItemDetail;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { productsDetails } from "../../../dataBase/db";
// import Spinner from "../../Spinner/Spinner";
// import "./ItemDetail.scss";

// function ItemDetail() {
//   const [item, setItem] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     setTimeout(() => {
//       const promise = new Promise((res, rej) => {
//         res(productsDetails);
//       });
//       promise.then((productsDetails) => {
//         setItem(productsDetails);
//       });
//     }, 1000);
//   }, [id]);

//   return (
//     <div>
//       {item.length === 0 ? (
//         <Spinner />
//       ) : (
//         item.map((e) => {
//           return (
//             <div className="ItemDetail" key={e.id}>
//               <img src={e.picture} alt="Product" />
//               <p>Titulo: {e.title}</p>
//               <div>
//                 {" "}
//                 <ItemCount />{" "}
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// }

// export default ItemDetail;
