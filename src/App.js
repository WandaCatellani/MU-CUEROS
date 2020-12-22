import NavBar from "./components/NavBar/NavBar";
// import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import Footer from "./components/Footer/Footer";
import "./reset.scss";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      
      <Footer titulo="soy un titulo" />
    </>
  );
}

export default App;
