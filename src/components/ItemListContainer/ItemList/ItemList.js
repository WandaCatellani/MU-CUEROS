// import React, { useState, useEffect } from "react";
// import CardDeck from "react-bootstrap/CardDeck";
// import "./ItemList.scss";
// import Item from "../../Item/Item";
// // import ItemCount from "../../ItemCount/ItemCount";

// function ItemList(props) {
//   const [items, setItems] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items")
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           setItems(data);
//         });
//     }, 1000);
//   }, []); //Esto se ejecuta apenas se monta el componente / onInit

//   return (
//     <div>
//       <CardDeck>
//         {items ? (
//           items.map((product, i) => (
//             <Item
//               key={product.id}
//               nombre={product.nombre}
//               imagen={product.imagen}
//               precio={product.precio}
//               categoria={product.categoria}
//             />
//           ))
//         ) : (
//           // <ItemCount />
//           <p>Trayendo información desde base de datos...</p>
//         )}
//       </CardDeck>
//     </div>
//   );
// }

// export default ItemList;

import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import "./ItemList.scss";
import { products } from "../../Item/Item";
import ItemCount from "../../ItemCount/ItemCount";
const ItemList = () => {
  const [product, setItem] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const promise = new Promise((res, rej) => {
        res(products);
      });
      promise.then((products) => {
        setItem(products);
      });
    }, 1000);
  }, []);
  return (
    <div>
      {product ? (
        product.map((item, i) => (
          <div className="list-roducts">
            <h3>{item.title}</h3>

            <h4>{item.model}</h4>

            <Image
              className="img-product"
              src={item.picture}
              alt="Picture_Product"
              fluid
              rounded
            />

            <p>{item.id}</p>

            <p className="desc-product">{item.description}</p>

            <p className="price-product">${item.price}</p>

            <ItemCount />
          </div>
        ))
      ) : (
        <p>Trayendo información desde base de datos...</p>
      )}
    </div>
  );
};

export default ItemList;
