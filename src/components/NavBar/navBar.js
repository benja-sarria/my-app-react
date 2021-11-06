// Cada componente solamente puede retornar un componente. Con lo cual, solamente puedo anidar componentes, no retornar varios

// También puedo exportar con export al lado de la declaración de la función. Y luego para importar en la app tengo que poner import { función } from "./path.js" - cuando el export es "default" las llaves no son necesarias

// Todos los componentes funcionales empiezan con mayúscula - así como debemos escribir el nombre del archivo con el nombre de la función del componente que vamos a crear

import "./navBar.scss";

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img src="#" className="brandLogo" alt="logo de la marca" />
            </div>
            <ul className="navbar-element">
                <li className="navbar-item">Enlace 1</li>
                <li className="navbar-item">Enlace 2</li>
                <li className="navbar-item">Enlace 3</li>
            </ul>
        </div>
    );
};

export default NavBar;
