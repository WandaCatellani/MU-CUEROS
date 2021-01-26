/* MODIFICAR RUTAS */

// import { useState, useEffect } from "react";
// import Spinner from "../../components/Spinner/Spinner";
// import CardDeck from "react-bootstrap/CardDeck";
// import { getCategory } from "../../dataBase/db";
// import Section from "../../components/Section/Section";

// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       getCategory().then((res) => {
//         setItems(res);
//         setLoading(false);
//       });
//     }, 1000);
//   }, []);

//   return (
//     <>
//       <Section title="Bienvenidos" />

//       {loading ? (
//         <Spinner />
//       ) : (
//         <CardDeck className="#">
//           {items.map((item, i) => {
//             return <Item item={item} key={i} />;
//           })}
//         </CardDeck>
//       )}
//     </>
//   );
// };

// export default ItemListContainer;
