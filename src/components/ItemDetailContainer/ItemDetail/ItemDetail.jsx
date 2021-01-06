import "./ItemDetail.scss";
import Button from "../../Button/Button";
import ItemCount from "../../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const onAddItem = (counter) => {
    setQuantity(counter);
  };

  const addToCart = () => {
    alert(`Agregaste ${quantity} ${product.title} al carrito`);
  };

  return (
    <>
      <Button content={"Atras"} path={"/"} />
      <div id="ItemDetail">
        <div>
          <img src={product.picture} alt={"Imagen"} />
        </div>

        <div>
          <h3 className={"productDetail"}>{product.title}</h3>
          <h3 className={"productDetail"}>Modelo: {product.model}</h3>
          <h4 className={"productDetail"}>${product.price}</h4>
          <h6 className={"productDetail"}>Stock: {product.stock} unidades</h6>

          <ItemCount initialValue={1} maxValue={10} onAdd={onAddItem} />

          <Button
            content={`Agregar al carrito ${quantity} ${product.model}`}
            callback={addToCart}
          />
        </div>
      </div>
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
