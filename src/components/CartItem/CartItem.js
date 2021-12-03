import React, { useContext } from "react";
import { CartContext } from "../Context/CartContextProvider/CartContextProvider.js";
import "./CartItem.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export const CartItem = ({ prod, setLoading }) => {
    console.log(useContext(CartContext));
    console.log(setLoading);
    console.log(prod);

    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    const handlingItemRemoval = () => {
        setTimeout(() => {
            removeCartItem(prod.id);
            setLoading(true);
        }, 200);
    };

    const itemBlock = (
        <>
            <Link to={`/detail/${prod.id}`} className="product-link">
                {prod.name} - en carrito: &nbsp;
            </Link>
            {prod.cartQuantity} unidades
        </>
    );

    const Demo = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    const { cart, ditchCart, removeCartItem } = useContext(CartContext);

    return (
        <div className="cart-item-container">
            {/* <div className="cart-info-container cart-description-container">
                <h3 className="cart-item-text text-title">{prod.name}</h3>
                <p className="cart-item-text">{prod.cartQuantity}</p>
            </div>
            <div className="cart-info-container cart-image-container">
                <img src={prod.img} alt={prod.name} />
            </div>
            <div className="cart-info-container cart-price-container">
                <p className="cart-item-text">{prod.price}</p>
            </div> */}
            <Demo>
                <List dense={dense}>
                    <ListItem
                        secondaryAction={
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={handlingItemRemoval}
                            >
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <img src={prod.img} alt={prod.name} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={itemBlock}
                            secondary={
                                prod.description
                                    ? `${
                                          prod.description
                                      } - Precio por unidad: $${Intl.NumberFormat().format(
                                          prod.price
                                      )}`
                                    : null
                            }
                        />
                    </ListItem>
                </List>
            </Demo>
            <div className="cart-info-container cart-price-container">
                <p className="cart-item-text">
                    ${" "}
                    {Intl.NumberFormat().format(prod.price * prod.cartQuantity)}
                </p>
            </div>
        </div>
    );
};
