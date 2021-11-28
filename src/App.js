import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import "./base/_baseStyles.scss";
import NavBar from "./components/NavBar/NavBar.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import FloatingActionButtons from "./components/FloatingBtn/FloatingActionButtons.js";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { capitalizeFirstLetter } from "./helpers/capitalizeLetter.js";
import { DiscoverContainer } from "./components/DiscoverContainer/DiscoverContainer.js";
import { CartContextProvider } from "./components/Context/CartContextProvider/CartContextProvider.js";
import { CartContext } from "./components/Context/CartContextProvider/CartContextProvider.js";

function App() {
    let greeting;
    let userName = "Usuario";
    const [actualCategory, setActualCategory] = useState("");
    console.log();
    // const { totalCart } = useContext(CartContext);

    const [acrossCounter, setAcrossCounter] = useState(0);

    const personalizedGreeting = (param) => {
        setActualCategory(param);
        return greeting;
    };

    return (
        <CartContextProvider
            acrossCount={acrossCounter}
            setAcrossCount={setAcrossCounter}
        >
            <BrowserRouter className="app">
                <header className="App-header">
                    <NavBar addedProducts={`${acrossCounter}`} />
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
                        path="/category/:catID"
                        element={
                            <ItemListContainer
                                greeting={`${
                                    actualCategory
                                        ? `Maravíllate con los secretos de ${
                                              actualCategory === "vajilla"
                                                  ? "nuestra"
                                                  : "nuestras"
                                          } ${capitalizeFirstLetter(
                                              actualCategory
                                          )}`
                                        : "Bienvenido a Planet Sushi"
                                }!`}
                                greetingFunction={personalizedGreeting}
                            />
                        }
                    />

                    <Route
                        path="/detail/:itemId"
                        element={<ItemDetailContainer />}
                    />
                    <Route path="/discover" element={<DiscoverContainer />} />
                </Routes>
                <FloatingActionButtons addedProducts={`${acrossCounter}`} />
            </BrowserRouter>
        </CartContextProvider>
    );
}

export default App;

// el fragment en react nos permite no incorporar divs sin sentido; para ello necesitamos en la app borrar el "div" dentro de las <> </> - Aunque al fragment no le podemos dar clases de estilo
