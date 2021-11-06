// Cada componente solamente puede retornar un componente. Con lo cual, solamente puedo anidar componentes, no retornar varios

// También puedo exportar con export al lado de la declaración de la función. Y luego para importar en la app tengo que poner import { función } from "./path.js" - cuando el export es "default" las llaves no son necesarias

// Todos los componentes funcionales empiezan con mayúscula - así como debemos escribir el nombre del archivo con el nombre de la función del componente que vamos a crear

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TemporaryDrawer from "../navDrawer/navDrawer.js";
import "./navBar.scss";

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="appbarcontainer">
                <Toolbar>
                    <TemporaryDrawer />

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className="brand-container"
                    >
                        <img
                            src="./assets/images/logo.webp"
                            alt="planet sushi logo"
                            className="sushi-logo"
                        />
                        Planet Sushi
                    </Typography>
                    <Button color="inherit">Crea</Button>
                    <Button color="inherit">Descubre</Button>
                    <Button color="inherit">Disfruta</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
