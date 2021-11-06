import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
SUGAR SYNTAX: Son sintaxis que se van agregando al lenguaje para hacer más fácil y eficiente su utilización (ej: i++ ; i += 1) - Son mejoras que se van haciendo sobre la sintaxis del lenguaje.
*/

/* El index sería como el archivo padre de todo. Pero nosotros vamos a trabajar sobre el archivo app.js - El index.js va a renderizar el app.js - y lo va a añadir en el index.html a través del root id */
