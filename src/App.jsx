import React from "react";
import "./reset.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./container/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./container/CartContainer/CartContainer";
import Footer from "./components/Footer/Footer";
import CheckoutContainer from "./container/CheckoutContainer/CheckoutContainer";

function App() {
  const options = {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  };

  return (
    <AppProvider>
      <BrowserRouter>
        <NavBar />

        <Switch>
        <Route component = { Home } path="/" exact />
          <Route component = { ItemListContainer } path="/"  />

          <Route path="/category/:id">
            <ItemListContainer />
          </Route>

          <Route
            component = { ItemDetailContainer }
            path="/detail/:id"
            exact
            className="box"
            options={options}
          />

          <Route component = { CartContainer}  path="/cart" />

          <Route component = { CheckoutContainer } path="/checkout" />
        </Switch>

        <Route component = { Footer } />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
