import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/navBar.js";
import { HomeView } from "./components/HomeView/HomeView.js";
import { contenedor } from "./components/ejemplos/contenedor.js";
import { Button } from "react-bootstrap";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* usando bootstrap */}
                <Button variant="warning">Hola</Button>
                <NavBar />
                {/* para pasar PROPS - tenemos que pasar parámetros en la etiqueta del componente - se puede pasar cualquier tipo de datos*/}
                <HomeView
                    titulo="hola mundo"
                    contenido="bienvenidos a todos"
                    imagen={{
                        nombre: "benjamín",
                        apellido: "sarría ferrer",
                    }}
                />

                <HomeView
                    titulo="Chau!"
                    contenido="Nos vemos"
                    imagen={{
                        nombre: "benjamín",
                        apellido: "sarría ferrer",
                    }}
                />

                <ItemListContainer />
                <contenedor />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

// el fragment en react nos permite no incorporar divs sin sentido; para ello necesitamos en la app borrar el "div" dentro de las <> </> - Auque al fragment no le podemos dar clases de estilo
