import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import "./base/_baseStyles.scss";
import NavBar from "./components/NavBar/navBar.js";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer.js";
import FloatingActionButtons from "./components/floatingBtn/FloatingActionButtons.js";

function App() {
    let userName = "Usuario";

    return (
        <div className="app">
            <header className="App-header">
                <NavBar />

                <ItemListContainer
                    greeting={`Hola ${userName}! Bienvenido a Planet Sushi!`}
                />
                <FloatingActionButtons />
            </header>
        </div>
    );
}

export default App;

// el fragment en react nos permite no incorporar divs sin sentido; para ello necesitamos en la app borrar el "div" dentro de las <> </> - Auque al fragment no le podemos dar clases de estilo
