import React, { useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./AccountMenu.scss";
import { UserContext } from "../Context/UserContext/UserContext.js";
import { sessionLogOut } from "../../helpers/sessionLogOut.js";
import { CartContext } from "../Context/CartContextProvider/CartContextProvider.js";

export function AccountMenu({ userName, photoURL }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { setSignedUser, setLoggedIn, setReload, signedUser } =
        useContext(UserContext);
    const { ditchCart } = useContext(CartContext);

    useEffect(() => {}, [photoURL, userName]);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOutSignedUser = () => {
        console.log(signedUser);
        // ditchCart();
        sessionLogOut(setSignedUser, setReload, setLoggedIn);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                    >
                        <Avatar
                            alt={userName}
                            src={photoURL}
                            sx={{ width: 40, height: 40 }}
                        ></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            {signedUser.user.displayName === "" &&
            Boolean(!signedUser.displayName) ? (
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            bgcolor: "rgba(0,0,0,0.35)",
                            border: "2px solid  var(--globalGreenHighlight-background-color-glitch)",
                            color: "white",
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&:before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "black",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                                borderTop:
                                    "2px solid var(--globalGreenHighlight-background-color-glitch)",
                                borderLeft:
                                    "2px solid var(--globalGreenHighlight-background-color-glitch)",
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    <MenuItem onClick={logOutSignedUser}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Cerrar Sesión
                    </MenuItem>
                </Menu>
            ) : (
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            bgcolor: "rgba(0,0,0,0.35)",
                            border: "2px solid  var(--globalGreenHighlight-background-color-glitch)",
                            color: "white",
                            "& .MuiAvatar-root": {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            "&:before": {
                                content: '""',
                                display: "block",
                                position: "absolute",
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: "black",
                                transform: "translateY(-50%) rotate(45deg)",
                                zIndex: 0,
                                borderTop:
                                    "2px solid var(--globalGreenHighlight-background-color-glitch)",
                                borderLeft:
                                    "2px solid var(--globalGreenHighlight-background-color-glitch)",
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                    <MenuItem>
                        <Avatar alt={userName} src={photoURL} />{" "}
                        {userName ? userName : signedUser.displayName}
                    </MenuItem>
                    <Divider />

                    <MenuItem>
                        <ListItemIcon>
                            <ShoppingBasketIcon fontSize="small" />
                        </ListItemIcon>
                        Mis órdenes
                    </MenuItem>
                    <MenuItem onClick={logOutSignedUser}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Cerrar Sesión
                    </MenuItem>
                </Menu>
            )}
            {/*  <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        bgcolor: "rgba(0,0,0,0.35)",
                        border: "2px solid  var(--globalGreenHighlight-background-color-glitch)",
                        color: "white",
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "black",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                            borderTop:
                                "2px solid var(--globalGreenHighlight-background-color-glitch)",
                            borderLeft:
                                "2px solid var(--globalGreenHighlight-background-color-glitch)",
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem>
                    <Avatar alt={userName} src={photoURL} />{" "}
                    {userName ? userName : signedUser.displayName}
                </MenuItem>
                <Divider />

                <MenuItem>
                    <ListItemIcon>
                        <ShoppingBasketIcon fontSize="small" />
                    </ListItemIcon>
                    Mis órdenes
                </MenuItem>
                <MenuItem onClick={logOutSignedUser}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Cerrar Sesión
                </MenuItem>
            </Menu> */}
        </>
    );
}
