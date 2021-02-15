import useCartContext from "../../Context/CartContext";
import Button from "../../components/Button/Button";
import "../../components/Button/Button.scss";
import "./CartContainer.scss";
import Cart from "../../components/Cart/Cart";

// Agregar Section
const CartContainer = () => {
  const { products } = useCartContext();

  return (
    <div className="container cartContainer">
      {products.length === 0 ? (
        <div className="cart-body">
          <h3 className="titulo">
            No tienes productos en tu carrito actualmente
          </h3>
          <Button path="/" content="Volver a Home" className="btn-add" />
        </div>
      ) : (
        <div>
          <Cart products={products} />
        </div>
      )}
    </div>
  );
};
export default CartContainer;
