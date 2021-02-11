import React from "react";
import "./reset.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Home from "./container/Home/Home";
// import ItemListContainer from "./container/ItemListContainer/ItemListcontainer";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import CategoriesContainer from "./container/CategoriesContainer/CategoriesContainer";
import CategoriesDetailContainer from "./container/CategoriesDetailContainer/CategoriesDetailContainer";
import CartContainer from "./container/CartContainer/CartContainer";
import Footer from "./components/Footer/Footer";
import CheckoutContainer from "./container/CheckoutContainer/CheckoutContainer";
import WhatsApp from "./components/WhatsApp/WhatsApp";

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
          <Route component={Home} path="/" exact />

          {/* <Route component={ItemListContainer} path="/" exact /> */}

          {/* <Route path="/category/:id">
            <ItemListContainer />
          </Route> */}

          <Route
            component={ItemDetailContainer}
            path="/detail/:id"
            exact
            className="box"
            options={options}
          />

          <Route exact path="/categories/">
            <CategoriesContainer />
          </Route>

          <Route exact path="/categories/:categoryId">
            <CategoriesDetailContainer />
          </Route>

          <Route component={CartContainer} path="/cart" />

          <Route component={CheckoutContainer} path="/checkout" />
        </Switch>

        <WhatsApp />

        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
