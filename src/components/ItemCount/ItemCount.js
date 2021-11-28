import React, { useState, useEffect, useContext } from "react";
import "./ItemCounter.scss";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartWidget } from "../CartWidget/CartWidget.js";
import {
    CartContextProvider,
    CartContext,
} from "../Context/CartContextProvider/CartContextProvider.js";

export const ItemCount = ({
    max,
    initial,
    cartQuantity,
    setQuantity,
    handleAdd,
}) => {
    const { accountTotal } = useContext(CartContext);

    const handleSubtracting = () => {
        if (cartQuantity > 0) {
            setQuantity(cartQuantity - 1);
        }
    };
    const handleAdding = () => {
        cartQuantity < max && setQuantity(cartQuantity + 1);
    };

    return (
        <div className={`item-controls-container `}>
            <div className="item-count-container">
                <button
                    className="item-count-btn decrease"
                    onClick={handleSubtracting}
                >
                    <p> - </p>
                </button>
                <div className="item-counter">
                    <p className="counter-number">{cartQuantity}</p>
                </div>

                <button
                    className="item-count-btn increase"
                    onClick={handleAdding}
                >
                    {" "}
                    <p> + </p>
                </button>
            </div>
            <div className="add-to-cart-container">
                <Button
                    variant="outlined"
                    className="add-to-cart-btn"
                    onClick={handleAdd}
                >
                    <CartWidget
                        icon={<AddShoppingCartIcon />}
                        showBadge="0"
                        specialClass=""
                    />
                    &nbsp; Añadir al carrito
                </Button>
            </div>
        </div>
    );
};
