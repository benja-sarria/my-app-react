// Cada componente solamente puede retornar un componente. Con lo cual, solamente puedo anidar componentes, no retornar varios

// También puedo exportar con export al lado de la declaración de la función. Y luego para importar en la app tengo que poner import { función } from "./path.js" - cuando el export es "default" las llaves no son necesarias

// Todos los componentes funcionales empiezan con mayúscula - así como debemos escribir el nombre del archivo con el nombre de la función del componente que vamos a crear

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TemporaryDrawer from "../NavDrawer/NavDrawer.js";
import "./NavBar.scss";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PathRoute } from "../Context/PathRoute/PathRoute.js";

export default function NavBar({ addedProducts }) {
    const [logoSrc, setLogoSrc] = useState("./assets/images/logo.webp");
    const [actualLocation, setActualLocation] = useState(
        window.location.pathname
    );

    const { actualCategory, setActualCategory, usePathname } =
        useContext(PathRoute);

    window.addEventListener("popstate", () => {
        setActualLocation(window.location.pathname);
    });

    console.dir(window.location.pathname);

    useEffect(() => {
        console.log("detectando cambios de ruta");
        console.log(actualLocation);
        if (actualLocation === "/") {
            setLogoSrc("./assets/images/logo.webp");
        } else {
            setLogoSrc("../assets/images/logo.webp");
        }
        console.log(logoSrc);
    }, [logoSrc]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="appBarContainer">
                <Toolbar className="navbar-toolbar">
                    <TemporaryDrawer addedProd={addedProducts} />

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="brand-container"
                    >
                        <Link to="/" className="brand-link">
                            <img
                                src={logoSrc}
                                alt="planet sushi logo"
                                className="sushi-logo"
                            />
                            Planet Sushi
                        </Link>
                    </Typography>

                    <Link to="/" className="link-item">
                        <Button color="inherit">Productos</Button>
                    </Link>
                    <Link to="/discover" className="link-item">
                        <Button color="inherit" className="link-item">
                            Descubre
                        </Button>
                    </Link>

                    <Button color="inherit" className="link-item">
                        Disfruta
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
