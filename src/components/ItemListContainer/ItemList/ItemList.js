// import React, { useState, useEffect } from "react";
// import Image from "react-bootstrap/Image";
// import "./ItemList.scss";
// import { productsDetails } from "../../../dataBase/db";
// import ItemCount from "../../ItemCount/ItemCount";
// import Spinner from "../../Spinner/Spinner";
// import { Link } from "react-router-dom";

// const ItemList = () => {

//   const [product, setItem] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       const promise = new Promise((res, rej) => {
//         res(productsDetails);
//       });

//       promise.then((productsDetails) => {
//         setItem(productsDetails);
//       });
//     }, 500);
//   }, []);

//   return (
//     <div>
//       {product ? (
//         product.map((item, i) => (
//           <div className="list-roducts">
//             <Link to={"/category/:id"}>
//               <h3>{item.title}</h3>
//             </Link>

//             <h4>{item.model}</h4>

//             <Image
//               className="img-product"
//               src={item.picture}
//               alt="Picture_Product"
//               fluid
//               rounded
//             />

//             <p>{item.id}</p>

//             <p className="desc-product">{item.description}</p>

//             <p className="price-product">${item.price}</p>

//             <ItemCount />
//           </div>
//         ))
//       ) : (
//         <Spinner />
//       )}
//     </div>
//   );
// };

// export default ItemList;
import Item from "../../Item/Item";
import "./ItemList.scss";
import CardDeck from "react-bootstrap/CardDeck";

const ItemList = ({ items }) => {
  return (
    <div className={"itemList"}>
      <CardDeck>
        {items.map((item, i) => {
          return <Item item={item} key={i} />;
        })}
      </CardDeck>
    </div>
  );
};

export default ItemList;
