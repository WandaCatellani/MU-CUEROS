import NavBar from "./components/NavBar/NavBar";
import MiComponente from "./components/ItemListContainer/MiComponente";
import "./reset.scss";

function App() {
  return (
    <>
      <NavBar />
      <section className="componente">
      <MiComponente />
      </section>
    </>
  );
}

export default App;