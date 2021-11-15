import React, { useState } from "react";
import "./ItemCounter.scss";

export const ItemCount = () => {
    const [clicks, setClicks] = useState(0);

    const handleClicks = (evt) => {
        console.log(evt);

        if (evt.target.classList.contains("increase")) {
            setClicks(clicks + 1);
            console.log(clicks + 1);
        } else {
            clicks >= 1 && setClicks(clicks - 1);
            console.log(clicks - 1);
        }
    };

    return (
        <div className="item-count-container">
            <button className="item-count-btn increase" onClick={handleClicks}>
                {" "}
                +
            </button>
            <div className="item-counter">
                <p className="counter-number">{clicks}</p>
            </div>
            <button className="item-count-btn decrease" onClick={handleClicks}>
                -
            </button>
        </div>
    );
};
