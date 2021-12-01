import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ItemCountEnabler } from "../ItemCountEnabler/ItemCountEnabler.js";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ItemDetail.scss";
import { ItemCount } from "../ItemCount/ItemCount.js";
import {
    CartContextProvider,
    CartContext,
} from "../Context/CartContextProvider/CartContextProvider.js";
import { CartWidget } from "../CartWidget/CartWidget.js";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ItemDetail = ({
    id,
    name,
    price,
    img,
    category,
    stock,
    description,
}) => {
    const [cartQuantity, setCartQuantity] = useState(0);
    const { addCart, isInCart, accountTotal } = useContext(CartContext);

    const handleAdd = () => {
        if (cartQuantity > 0) {
            addCart({ id, name, price, cartQuantity, img, description });
        }
    };

    const navigate = useNavigate();

    const handleVolver = () => {
        /* acá puedo poner la ruta que quiera navegar */

        /* el hook navigate puede recibir valores enteros, positivos o negativos, si pongo -1 vuelve a la página anterior a la que estaba */
        navigate(-1);
    };

    return (
        <article className="card">
            <IconButton
                aria-label="back"
                color="primary"
                onClick={handleVolver}
                className="back-btn"
            >
                <ArrowBackIcon />
                <span className="back-text"> Atrás</span>
            </IconButton>
            <div className="img-container">
                <img src={img} alt={name} className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title detail-page-title">{name}</h5>
                <p className="card-text detail-page-text description-page-text">
                    {description}
                </p>
                <p className="card-text detail-page-text">$ &nbsp; {price}</p>
                <p className="card-text detail-page-text">{category}</p>
                <hr className="divisor" />
                {!isInCart(id) ? (
                    <ItemCount
                        max={stock}
                        initial="0"
                        cartQuantity={cartQuantity}
                        setQuantity={setCartQuantity}
                        handleAdd={handleAdd}
                    />
                ) : (
                    <Link to="/cart" className="btn btn-success checkout-btn">
                        <p className="checkout-text">Terminar mi compra </p>
                        <CartWidget
                            specialClass=""
                            icon={<ShoppingCartIcon />}
                            showBadge="0"
                            addedProducts={`${accountTotal()}`}
                        />
                    </Link>
                )}
            </div>
        </article>
    );
};
