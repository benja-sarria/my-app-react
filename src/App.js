import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import "./base/_baseStyles.scss";
import NavBar from "./components/NavBar/NavBar.js";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.js";
import FloatingActionButtons from "./components/FloatingBtn/FloatingActionButtons.js";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.js";
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    useLocation,
} from "react-router-dom";
import { capitalizeFirstLetter } from "./helpers/capitalizeLetter.js";
import { DiscoverContainer } from "./components/DiscoverContainer/DiscoverContainer.js";
import { CartContextProvider } from "./components/Context/CartContextProvider/CartContextProvider.js";
import { CartContext } from "./components/Context/CartContextProvider/CartContextProvider.js";
import { CartView } from "./components/CartView/CartView.js";
import { PathRoute } from "./components/Context/PathRoute/PathRoute.js";
import { StockPanel } from "./components/StockPanel/StockPanel.js";
import { Checkout } from "./components/Checkout/Checkout.js";
import { SignUp } from "./components/SignUp/SignUp.js";
import { Login } from "./components/Login/Login.js";
import { UserContextProvider } from "./components/Context/UserContext/UserContext.js";

function App() {
    let greeting, greetingMsg;
    let userName = "Planet Sushi";
    const [actualCategory, setActualCategory] = useState(
        window.location.pathname
    );
    console.log(actualCategory);

    const [signedUser, setSignedUser] = useState({
        user: {
            displayName: "",
        },
    });
    const [reload, setReload] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    console.log(signedUser);

    useEffect(() => {
        console.log(signedUser);
        console.log(signedUser.user.displayName === "");
        return () => {};
    }, [actualCategory, reload]);

    window.addEventListener("popstate", () => {
        console.log("SE CAMBIO DE URL");
    });

    const [acrossCounter, setAcrossCounter] = useState(0);

    const personalizedGreeting = (param) => {
        setActualCategory(param);
        return greetingMsg;
    };

    return (
        <UserContextProvider
            signedUser={signedUser}
            setSignedUser={setSignedUser}
            loggedIn={loggedIn}
        >
            <PathRoute.Provider value={{ actualCategory, setActualCategory }}>
                <CartContextProvider
                    acrossCount={acrossCounter}
                    setAcrossCount={setAcrossCounter}
                >
                    <BrowserRouter className="app">
                        {!reload ? (
                            <Login
                                setReload={setReload}
                                setLoggedIn={setLoggedIn}
                            />
                        ) : (
                            <>
                                <header className="App-header">
                                    <NavBar
                                        addedProducts={`${acrossCounter}`}
                                    />
                                </header>

                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <ItemListContainer
                                                greetingMsg={`Te damos la bienvenida `}
                                                msgName={`${userName}!`}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/category/:catID"
                                        element={
                                            <ItemListContainer
                                                greetingMsg={`${
                                                    actualCategory
                                                        ? `Maravíllate con los secretos de ${
                                                              actualCategory ===
                                                              "vajilla"
                                                                  ? "nuestra"
                                                                  : "nuestras"
                                                          }`
                                                        : `Te damos la bienvenida `
                                                } `}
                                                greetingFunction={
                                                    personalizedGreeting
                                                }
                                                msgName={
                                                    actualCategory
                                                        ? `${capitalizeFirstLetter(
                                                              actualCategory
                                                          )}!`
                                                        : `${userName}!`
                                                }
                                            />
                                        }
                                    />

                                    <Route
                                        path="/detail/:itemId"
                                        element={<ItemDetailContainer />}
                                    />
                                    <Route
                                        path="/cart"
                                        element={<CartView />}
                                    />
                                    <Route
                                        path="/discover"
                                        element={<DiscoverContainer />}
                                    />
                                    <Route
                                        path="/stock"
                                        element={<StockPanel />}
                                    />
                                    <Route
                                        path="/stock/:optionID"
                                        element={<StockPanel />}
                                    />
                                    <Route
                                        path="/checkout"
                                        element={<Checkout />}
                                    />
                                    <Route
                                        path="/auth/:authType"
                                        element={<Login />}
                                    />

                                    <Route
                                        path="*"
                                        element={<Navigate to="/" />}
                                    />
                                </Routes>
                                {actualCategory !== "/cart" ? (
                                    <FloatingActionButtons
                                        addedProducts={`${acrossCounter}`}
                                    />
                                ) : (
                                    ""
                                )}
                            </>
                        )}
                    </BrowserRouter>
                </CartContextProvider>
            </PathRoute.Provider>
        </UserContextProvider>
    );
}

export default App;

// el fragment en react nos permite no incorporar divs sin sentido; para ello necesitamos en la app borrar el "div" dentro de las <> </> - Aunque al fragment no le podemos dar clases de estilo
