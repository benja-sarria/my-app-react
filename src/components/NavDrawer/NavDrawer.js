import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { CartWidget } from "../CartWidget/CartWidget.js";
import "./NavDrawer.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext/UserContext.js";

export default function TemporaryDrawer({ addedProd }) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [authenticated, setAuthenticated] = useState(false);

    const { signedUser } = useContext(UserContext);

    useEffect(() => {
        console.log(signedUser);
        if (signedUser.user.uid) {
            console.log();
            if (
                signedUser.user.uid === "z0OZSSLFI8d0ogoxbS7EQQIgdmv1" ||
                signedUser.user.uid === "g5hNe4tSQGRvWiIGkZIe85QSc522"
            ) {
                setAuthenticated(true);
                console.log(authenticated);
            }
        }
    }, [signedUser, authenticated]);

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Productos", "Descubre", "Disfruta", `Check-out`].map(
                    (text, index) => (
                        <ListItem
                            button
                            key={text}
                            onClick={() => {
                                console.log(`#${text}`);
                            }}
                        >
                            <Link
                                to={
                                    text === "Productos"
                                        ? "/"
                                        : text === "Descubre"
                                        ? "/discover"
                                        : text === "Disfruta"
                                        ? ""
                                        : text === "Check-out"
                                        ? "/cart"
                                        : ""
                                }
                                className="link-item"
                            >
                                <ListItemText primary={text} />
                                {text === "Check-out" ? (
                                    <ListItemIcon className="cart-ico-container">
                                        <CartWidget
                                            className="cartIco"
                                            icon={<ShoppingCartIcon />}
                                            showBadge="1"
                                            addedProducts={addedProd}
                                            specialClass="specialClass"
                                            show={
                                                addedProd > 0
                                                    ? "visible"
                                                    : "invisible"
                                            }
                                        />
                                    </ListItemIcon>
                                ) : (
                                    ""
                                )}
                            </Link>
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {(authenticated
                    ? [`Contacto`, `${authenticated ? "Database Admin" : ""}`]
                    : [`Contacto`]
                ).map((text, index) => (
                    <ListItem button key={text}>
                        <Link
                            to={`${text === "Database Admin" ? "/stock" : "/"}`}
                            className="link-item"
                        >
                            <ListItemText primary={text} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="drawer-container">
            <React.Fragment key={"left"}>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    className="iconBtnContainer MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-sizeLarge css-ancrnh-MuiButtonBase-root-MuiIconButton-root"
                    onClick={toggleDrawer("left", true)}
                >
                    <MenuRoundedIcon className="menu-icon MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" />
                </IconButton>
                <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                    className="nav-drawer"
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
