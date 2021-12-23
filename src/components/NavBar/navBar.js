import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TemporaryDrawer from "../NavDrawer/NavDrawer.js";
import "./NavBar.scss";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AccountMenu } from "../AccountMenu/AccountMenu.js";
import { UserContext } from "../Context/UserContext/UserContext.js";

export default function NavBar({ addedProducts }) {
    const [logoSrc, setLogoSrc] = useState("./assets/images/logo.webp");
    const [actualLocation, setActualLocation] = useState(
        window.location.pathname
    );

    const { signedUser } = useContext(UserContext);

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
                            <p className="brand-text">Planet Sushi</p>
                        </Link>
                    </Typography>

                    <Link to="/" className="link-item">
                        <Button color="inherit" className="link-item">
                            Productos
                        </Button>
                    </Link>
                    <Link to="/discover" className="link-item">
                        <Button color="inherit" className="link-item">
                            Descubre
                        </Button>
                    </Link>
                    <AccountMenu
                        userName={signedUser.user.displayName}
                        photoURL={signedUser.user.photoURL}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
