import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/navBar.js";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer.js";
import "./app.scss";

function App() {
    return (
        <div className="app">
            <header className="App-header">
                <NavBar />

                <ItemListContainer />
            </header>
        </div>
    );
}

export default App;

// el fragment en react nos permite no incorporar divs sin sentido; para ello necesitamos en la app borrar el "div" dentro de las <> </> - Auque al fragment no le podemos dar clases de estilo
