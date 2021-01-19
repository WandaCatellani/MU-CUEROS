import useCartContext from "../../context/CartContext";
import Button from "../../components/Button/Button";
import "../../components/Button/Button.scss";
import "./CartContainer.scss";
import Cart from "../../components/Cart/Cart";

 const CartContainer = () => {
  const { products } = useCartContext();
  console.log(products);
  return (
    <div className="cartContainer">
      <h1>Carrito</h1>
      {products.length === 0 ? (
        <div className="cart-vacio">
          <h3 className="titulo">
            No tienes productos en tu carrito actualmente
          </h3>
          <Button
            path="/"
            content="Volver a comprar"
            className="btn-add"
          />
        </div>
      ) : (
        <div>
          <Cart products={products} />
        </div>
      )}
    </div>
  );
}
// Agregar Section
export default CartContainer