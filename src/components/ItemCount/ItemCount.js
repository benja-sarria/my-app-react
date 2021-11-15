import React, { useState } from "react";
import "./ItemCounter.scss";
import { Button } from "@mui/material";

export const ItemCount = ({ stock, currentClassState, initial }) => {
    const [clicks, setClicks] = useState(Number(stock !== 0 ? initial : stock));
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
                <Button variant="outlined" className="add-to-cart-btn">
                    Añadir al carrito
                </Button>
            </div>
        </div>
    );
};
