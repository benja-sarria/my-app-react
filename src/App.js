import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import "./base/_baseStyles.scss";
import NavBar from "./components/NavBar/navBar.js";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer.js";
import FloatingActionButtons from "./components/floatingBtn/FloatingActionButtons.js";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
    let userName = "Usuario";

    return (
        <BrowserRouter className="app">
            <header className="App-header">
                <NavBar />
            </header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ItemListContainer
                            greeting={`Hola ${userName}! Bienvenido a Planet Sushi!`}
                        />
                    }
                />

                <Route
                    path="/detail/:itemId"
                    element={<ItemDetailContainer />}
                />
            </Routes>
            <FloatingActionButtons />
        </BrowserRouter>
    );
}

export default App;

// el fragment en react nos permite no incorporar divs sin sentido; para ello necesitamos en la app borrar el "div" dentro de las <> </> - Aunque al fragment no le podemos dar clases de estilo
