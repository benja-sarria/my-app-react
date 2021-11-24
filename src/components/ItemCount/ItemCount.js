import React, { useState, useEffect } from "react";
import "./ItemCounter.scss";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartWidget } from "../CartWidget/CartWidget.js";

export const ItemCount = ({ stock, currentClassState, initial }) => {
    const [clicks, setClicks] = useState(Number(stock !== 0 ? initial : stock));
    const [cartQuantity, setCartQuantity] = useState(0);
    let targetClasslist;

    const handleClicks = (evt) => {
        console.log(evt);

        if (evt.target.nodeName === "BUTTON") {
            targetClasslist = evt.target.classList;
        } else if (evt.target.nodeName === "P") {
            targetClasslist = evt.target.parentNode.classList;
        }

        if (stock > 0) {
            if (targetClasslist.contains("increase")) {
                if (clicks + 1 <= stock) {
                    setClicks(clicks + 1);
                    console.log(clicks + 1);
                }
            } else {
                clicks >= 1 && setClicks(clicks - 1);
                console.log(clicks - 1);
            }
        } else {
            setClicks(0);
        }
    };

    const addingToCart = () => {
        setCartQuantity(clicks);
        console.log(clicks);
        console.log(
            `La cantidad de productos en el carrito es de ${cartQuantity}`
        );
    };

    useEffect(() => {
        setCartQuantity(clicks);
    }, [clicks]);

    return (
        <div className={`item-controls-container ${currentClassState}`}>
            <div className="item-count-container">
                <button
                    className="item-count-btn decrease"
                    onClick={handleClicks}
                >
                    <p> - </p>
                </button>
                <div className="item-counter">
                    <p className="counter-number">{clicks}</p>
                </div>

                <button
                    className="item-count-btn increase"
                    onClick={handleClicks}
                >
                    {" "}
                    <p> + </p>
                </button>
            </div>
            <div className="add-to-cart-container">
                <Button
                    variant="outlined"
                    className="add-to-cart-btn"
                    onClick={addingToCart}
                >
                    <CartWidget icon={<AddShoppingCartIcon />} showBadge="0" />
                    &nbsp; Añadir al carrito
                </Button>
            </div>
        </div>
    );
};
