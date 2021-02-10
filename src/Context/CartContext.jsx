import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const useCartContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addProduct = (product, quantity) => {
    // Busca en el array si existe. Si esta no lo trae
    const existing = products.find((p) => p.id === product.id);

    // Si existe
    if (existing) {
      // Sumo al existente
      existing.quantity += quantity;
      // Crea un array nuevo
      setProducts([...product]);
    } else {
      // Agrega uno nuevo y crea un array nuevo
      setProducts([...products, { ...product, quantity }]);
    }
  };

  // Suma los productos (acc = acumulador) Recorre productos y suma quantity (cantidad)
  const productsCount = () => {
    return products.reduce((acc, p) => (acc += p.quantity), 0);
  };

  // Elimina producto del array. Busca el indice y elimina 1
  const delProduct = (id) => {
    products.splice(
      products.findIndex((p) => p.id === id),
      1
    );
    setProducts([...products]);
  };

  // Importe total
  const getGrandTotal = () => {
    return products.reduce((acc, p) => (acc += p.price * p.quantity), 0);
  };

  return (
    <AppContext.Provider
      value={{ products, productsCount, addProduct, delProduct, getGrandTotal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default useCartContext;
